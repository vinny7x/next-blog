
import { FindAllPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default async function PostsListAdmin() {
    const posts = await FindAllPostsAdmin();

    return <div className="mb-16">
        {posts.map(post => {
            return <div className={clsx(
                'py-2 px-2',
                !post.published && 'bg-slate-300',
                'flex gap-2 items-center justify-between'
            )} key={post.id}>
                <Link href={`/admin/post/${post.id}`}>
                    {post.title}
                </Link>
                {!post.published && (
                    <span className="flex text-xs text-slate-600 italic">(Não publicado!)</span>
                )}
                <button
                    className={clsx(
                        'p-1 rounded cursor-pointer',
                        'bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600',
                        '[&_svg]:w-5 [&_svg]:h-5',
                        'transition hover:scale-120'
                    )}
                    aria-label={`Apagar post: ${post.title}`}
                    title={`Apagar post: ${post.title}`}
                >
                    <Trash2Icon />
                </button>

            </div>;
        })}
    </div>;
}
