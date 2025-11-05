import { MenuAdmin } from "@/components/Admin/MenuAdmin";

type AdminPostsLayuotProps = {
    children: React.ReactNode;
};


export default function AdminPostsLayuot({ children }: Readonly<AdminPostsLayuotProps>) {
    return <>
        <MenuAdmin />
        {children}
    </>;

}
