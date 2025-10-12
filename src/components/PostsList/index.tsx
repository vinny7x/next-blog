import { postRepository } from "@/repositories/post"
import { PostCoverImage } from "../PostCoverImage";
import clsx from "clsx";
import { PostHeading } from "../PostHeading";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import { PostSummary } from "../PostSummary";

export async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <section className={clsx(
            'grid grid-cols-1 gap-8',
            'sm:grid-cols-2',
            'lg:grid-cols-3',
        )}>
            {posts.map(post => {
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
