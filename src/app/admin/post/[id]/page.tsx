import { ManagePostForm } from "@/components/Admin/ManagePostForm";
import { findPostByIdAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

type AdminPostIdPageParams = {
    params: Promise<{ id: string; }>;
};
export const metadata: Metadata = {
    title: 'Editar post'
};
export default async function AdminPostIdPage({ params }: AdminPostIdPageParams) {
    const { id } = await params;
    const post = await findPostByIdAdmin(id).catch(() => undefined);
    if (!post) notFound();
    return <div className="flex flex-col gap-6">
        <h1 className="text-xl font-extrabold">Editar post</h1>
        <ManagePostForm mode="update" publicPost={post} />
    </div>;
}
