import clsx from "clsx";
import { FileTextIcon, HouseIcon } from "lucide-react";
import Link from "next/link";

export function MenuAdmin() {
    const linkClasses = clsx(
        'flex px-6 items-center justify-start gap-2 rounded-lg',
        'transition hover:bg-slate-800',
        'h-10 shrink-0'
    );

    return <nav className={clsx(
        'flex flex-col mb-8 p-2',
        'sm:flex-row sm:flex-wrap sm:justify-center',
        'bg-slate-900 text-slate-100 rounded-lg'
    )}>
        <a className={linkClasses} href="/" target="_blank"><HouseIcon size={16} /> Home</a>

        <Link className={linkClasses} href='/admin/post'><FileTextIcon size={16} /> Posts</Link>
    </nav>;
}
