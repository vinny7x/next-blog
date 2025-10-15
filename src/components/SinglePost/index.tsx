import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type SinglePostProps = {
    slug: string
}

export async function SinglePost({slug}: SinglePostProps){
const post = await findPostBySlugCached(slug).catch(() => undefined)

    if (!post) notFound();
    return (
        <div>
            <h1 className="text-7xl font-extrabold py-16">{post.title}</h1>
        </div>
    )
}
