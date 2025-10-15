import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
    slug: string
}

export async function SinglePost({ slug }: SinglePostProps) {
    const post = await findPostBySlugCached(slug).catch(() => undefined)

    if (!post) return notFound();
    return (
        <article className="mb-16">
            <header className="group flex flex-col gap-4 mb-2">
                <Image
                    className="rounded-xl"
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title} />
                <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
                <p>{post.author} | <PostDate dateTime={post.createdAt} /></p>
            </header>
            <p className="mb-4 text-xl text-slate-600">{post.excerpt}</p>
            <SafeMarkdown markdown={post.content}/>
        </article>
    )
}
