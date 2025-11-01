'use client'
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
type DeletePostButtonProps = {
    id: string, title: string
}
export function DeletePostButton({id, title}: DeletePostButtonProps) {
    function handleClick(){
        alert('oi')
    }
    return (
        <button
            className={clsx(
                'p-1 rounded cursor-pointer',
                'bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600',
                '[&_svg]:w-5 [&_svg]:h-5',
                'transition hover:scale-120'
            )}
            aria-label={`Apagar post: ${title}`}
            title={`Apagar post: ${title}`}
            onClick={handleClick}
        >
            <Trash2Icon />
        </button>
    );
}
