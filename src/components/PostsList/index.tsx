import { postRepository } from "@/repositories/post"
import { PostCoverImage } from "../PostCoverImage";
import clsx from "clsx";
import { PostHeading } from "../PostHeading";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";

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
                        <div className={clsx(
                            'flex flex-col gap-4',
                            'sm:justify-center'
                        )}>
                            <time className={clsx(
                                'text-slate-600 text-sm/tight block'
                            )}
                                dateTime={post.createdAt}>
                                {`${formatDateTime(post.createdAt)} (${formatRelativeDate(post.createdAt)})`}
                            </time>
                            <PostHeading url={postLink} as="h2">{post.title}</PostHeading>
                            <p>{post.excerpt}</p>
                        </div>
                    </div>)
            })}
        </section>
    )
}
