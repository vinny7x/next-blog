import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>
}
export async function generateMetadata({ params }: PostSlugPageProps):Promise<Metadata>{
     const { slug } = await params
    const post = await findPostBySlugCached(slug).catch(() => undefined)

    return {
        title: post?.title,
        description: post?.excerpt
    }
}
export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = await params
    const post = await findPostBySlugCached(slug).catch(() => undefined)

    if (!post) notFound();
    return (
        <div>
            <h1 className="text-7xl font-extrabold py-16">{post.title}</h1>
        </div>
    )
}
