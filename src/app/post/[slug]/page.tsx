import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
    params:{ slug: string }
}
export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
    const { slug } = params
    const post = await findPostBySlugCached(slug).catch(() => undefined)

    return {
        title: post?.title,
        description: post?.excerpt
    }
}
export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = params
    return (
        <Suspense fallback={<SpinLoader className="min-h-20 mb-16"/>}>
            <SinglePost slug={slug} />
        </Suspense>
    )
}
