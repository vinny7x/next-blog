export const dynamic = 'force-dynamic';

type AdminPostIdPageParams = {
    params: Promise<{ id: string; }>;
};

export default async function AdminPostIdPage({ params }: AdminPostIdPageParams) {
    const { id } = await params;
    return <div className="py-16 text-3xl">
        AdminPostIdPage {id}
    </div>;
}
