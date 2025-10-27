import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';

export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]> {
        logColor('findAllPublic', Date.now());

        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
            where: (posts, { eq }) => eq(posts.published, true)
        });
        return posts;
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
        logColor('findBySlugPublic', Date.now());

        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq, and }) => and(eq(post.published, true), eq(post.slug, slug))
        });
        if (!post) throw new Error('Post não encontrado');
        return post;
    }

    async findAll(): Promise<PostModel[]> {
        logColor('findAll', Date.now());

        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt)
        });
        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        logColor('findById', Date.now());

        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq }) => eq(post.id, id)
        });
        if (!post) throw new Error('Post não encontrado');
        return post;
    }
}
// (async () => {
//     const repo = new DrizzlePostRepository();
//     const post = await repo.findById('afa086e4-53e4-492d-acf2-7c2966d83fcd');
//     console.log(post);
// })();
