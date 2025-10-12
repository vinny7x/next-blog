import { PostCoverImage } from "../PostCoverImage";
import clsx from "clsx";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostsList() {
    const posts = await findAllPublicPosts()

    return (
        <section className={clsx(
            'grid grid-cols-1 gap-8',
            'sm:grid-cols-2',
            'lg:grid-cols-3',
        )}>
            {posts.slice(1).map(post => {
                const postLink = `/post/${post.slug}`
                return (
                    <div key={post.id} className="flex flex-col gap-4 group">
                        <PostCoverImage
                            src={post.coverImageUrl}
                            href={postLink}
                            alt={post.title}
                        />
                        <PostSummary
                            createdAt={post.createdAt}
                            excerpt={post.excerpt}
                            title={post.title}
                            postLink={postLink}
                            postHeading="h2" />
                    </div>)
            })}
        </section>
    )
}
