import { MenuAdmin } from "@/components/Admin/MenuAdmin";
import { requireLoginSessionOrRedirecty } from "@/lib/login/manage-login";

type AdminPostsLayuotProps = {
    children: React.ReactNode;
};


export default async function AdminPostsLayuot({ children }: Readonly<AdminPostsLayuotProps>) {
    await requireLoginSessionOrRedirecty()
    return <>
        <MenuAdmin />
        {children}
    </>;

}
