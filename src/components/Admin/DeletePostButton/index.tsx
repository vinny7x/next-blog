'use client';
import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";
import clsx from "clsx";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";

type DeletePostButtonProps = {
    id: string, title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [showDialog, setShowDialog] = useState(false);

    function handleClick() {
        setShowDialog(true);
        // if (!confirm('Tem certeza?')) return;

    }

    function handleConfirm() {
        startTransition(async () => {
            const result = await deletePostAction(id);
            alert(result);
            setShowDialog(false);
        });
    }

    return (
        <>
            <button
                className={clsx(
                    'p-1 rounded cursor-pointer',
                    'bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600',
                    'disabled:text-slate-600 disabled:cursor-not-allowed disabled:bg-gray-300',
                    '[&_svg]:w-5 [&_svg]:h-5',
                    'transition hover:scale-120'
                )}
                aria-label={`Apagar post: ${title}`}
                title={`Apagar post: ${title}`}
                onClick={handleClick}
                disabled={isPending}
            >
                {isPending && <LoaderIcon className="animate-spin" />}
                {!isPending && <Trash2Icon />}
            </button>
            {showDialog && <Dialog
                isVisible={showDialog}
                title="Apagar post?"
                content={`Tem certeza que deseja apagar o post ${title}`}
                onCancel={() => setShowDialog(false)}
                onConfirm={handleConfirm}
                disabled={isPending}
            />}
        </>
    );
}
