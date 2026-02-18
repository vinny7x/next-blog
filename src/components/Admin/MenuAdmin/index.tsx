'use client';

import { logoutAction } from "@/actions/login/logout-action";
import clsx from "clsx";
import { CircleXIcon, FileTextIcon, HourglassIcon, HouseIcon, LogOutIcon, MenuIcon, PencilLineIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function MenuAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    const [isPending, startTransitiojn] = useTransition();

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);
    const linkClasses = clsx(
        'flex px-6 items-center justify-start gap-2 rounded-lg',
        'transition hover:bg-slate-800 cursor-pointer',
        'h-10 shrink-0'
    );
    const openCloseBtnClasses = clsx(linkClasses, 'text-blue-200 italic', 'sm:hidden');

    function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        startTransitiojn(async () => {
            await logoutAction();
        });
    }

    return <nav className={clsx(
        'flex flex-col mb-8',
        'sm:flex-row sm:flex-wrap sm:justify-center sm:overflow-visible sm-h-auto',
        'bg-slate-900 text-slate-100 rounded-lg',
        !isOpen && 'h-10 overflow-hidden'
    )}>
        <button onClick={() => setIsOpen(s => !s)} className={openCloseBtnClasses}>
            {!isOpen && (
                <>
                    <MenuIcon />
                    Menu
                </>
            )}
            {isOpen && (
                <>
                    <CircleXIcon />
                    Menu
                </>
            )}
        </button>
        <a className={linkClasses} href="/" target="_blank"><HouseIcon size={16} /> Home</a>
        <Link className={linkClasses} href='/admin/post'><FileTextIcon size={16} /> Posts</Link>
        <Link className={linkClasses} href='/admin/post/new'><PencilLineIcon size={16} /> Criar post</Link>
        <a onClick={handleLogout} href="#" className={linkClasses}>
            {!isPending &&
                (<>
                    <LogOutIcon />
                    Sair
                </>)
            }
            {isPending && (
                <>
                    <HourglassIcon />
                    Aguarde...
                </>
            )}
        </a>
    </nav>;
}
