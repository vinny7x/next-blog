import { FindAllPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";
import ErrorMessage from "../../ErrorMessage";

export default async function PostsListAdmin() {
    const posts = await FindAllPostsAdmin();
    if (posts.length <= 0) return <ErrorMessage contenteTitle="Ops 😅" content="Não temos nenhum post ainda, que tal criar um?" />;

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
                <DeletePostButton id={post.id} title={post.title} />
            </div>;
        })}
    </div>;
}
