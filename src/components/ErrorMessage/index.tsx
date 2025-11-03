'use client';

import clsx from "clsx";
type ErrorMessageProps = {
    pageTitle?: string,
    contenteTitle: string,
    content: React.ReactNode;
};
export default function ErrorMessage({ pageTitle = '', contenteTitle, content }: ErrorMessageProps) {
    return (
        <>
        {pageTitle && <title>{pageTitle}</title>}

            <div
                className={clsx(
                    "bg-slate-900 text-slate-100",
                    "mb-16 p-8 rounded-xl",
                    "flex flex-col items-center justify-center",
                    "text-center gap-2",
                    "min-h-[320px]"
                )}
            >
                <h1 className="text-7xl font-extrabold leading-tight">{contenteTitle}</h1>
                <div className="text-lg text-slate-300">
                    {content}
                </div>
            </div>
        </>
    );
}
