'use client';
import clsx from "clsx";
import React from "react";

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
        if (!disabled) return;
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
                <button className={clsx(
                    'bg-slate-200 text-slate-950',
                    'hover:bg-slate-300 transition',
                    'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed',
                    'flex items-center justify-center',
                    'py-2 px-4 rounded-lg cursor-pointer'
                )}
                    autoFocus
                    onClick={handleCancel}
                    disabled={disabled}
                >Cancelar</button>
                <button className={clsx(
                    'bg-blue-500 text-blue-50',
                    'hover:bg-blue-600 transition',
                    'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed',
                    'flex items-center justify-center',
                    'py-2 px-4 rounded-lg cursor-pointer'
                )}
                    onClick={onConfirm}
                    disabled={disabled}
                >Ok</button>
            </div>
        </div>
    </div>;
}
