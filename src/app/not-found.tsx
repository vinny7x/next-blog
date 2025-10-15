import clsx from "clsx";

export default function NotFoundPage() {
    return (
        <>
            <title>Página não encontrada</title>
            <div
                className={clsx(
                    "bg-slate-900 text-slate-100",
                    "mb-16 p-8 rounded-xl",
                    "flex flex-col items-center justify-center",
                    "text-center gap-2",
                    "min-h-[320px]"
                )}
            >
                <h1 className="text-7xl font-extrabold leading-tight">404</h1>
                <p className="text-lg text-slate-300">
                    A página que você tentou acessar não foi encontrada.
                </p>
            </div>
        </>
    );
}
