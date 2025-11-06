'use client';
import clsx from "clsx";
import React from "react";
import { Button } from "../Button";

type DialogProps = {
    isVisible?: boolean;
    title: string;
    content: React.ReactNode;
    disabled: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

export function Dialog({ isVisible = false, disabled = false, title, content, onCancel, onConfirm }: DialogProps) {
    if (!isVisible) return null;
    function handleCancel() {
        if (disabled) return;
        onCancel();
    }
    return <div className={clsx(
        'fixed z-50 inset-0',
        'flex items-center justify-center',
        'bg-slate-900/50 backdrop-blur-xs',
    )}
        onClick={handleCancel}
    >
        <div className={clsx(
            'flex flex-col gap-6',
            'bg-slate-100 shadow-lg shadow-black/30 text-center',
            'p-6 rounded-lg max-w-2xl mx-6'
        )}
            role="dialog"
            aria-modal={true}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            onClick={e => e.stopPropagation()}
        >
            <h3
                id="dialog-title"
                className={clsx(
                    'text-xl font-extrabold'
                )}>{title}</h3>
            <div
                id="dialog-description"
            >{content}</div>
            <hr />
            <div className={clsx(
                'flex items-center justify-around'
            )}>
                <Button variant='ghost'
                    autoFocus
                    onClick={handleCancel}
                    disabled={disabled}
                >Cancelar</Button>
                <Button
                variant='default'
                    onClick={onConfirm}
                    disabled={disabled}
                >Ok</Button>
            </div>
        </div>
    </div>;
}
