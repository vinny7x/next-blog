import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import ErrorMessage from "../ErrorMessage";

export async function FeaturedPost() {
    const posts = await findAllPublicPostsCached();
    if (posts.length <= 0) return <ErrorMessage contenteTitle="Ops 😅" content="Ainda não criamos nenhum post 🤭"/>
    const featuredPost = posts[0];

    const postLink = `/post/${featuredPost.slug}`;
    return (
        <section className={clsx(
            'mb-16 gap-8',
            'grid grid-cols-1',
            'md:grid-cols-2',
            'group'
        )}>
            <PostCoverImage src={featuredPost.coverImageUrl} href={postLink} alt='Titulo do post' priority={true} />
            <PostSummary
                createdAt={featuredPost.createdAt}
                excerpt={featuredPost.excerpt}
                title={featuredPost.title}
                postLink={postLink}
                postHeading="h1" />
        </section>
    );
}
