import clsx from "clsx"
import React from "react"

type ContainerProps = {
    children: React.ReactNode
}
export function Container({ children }: ContainerProps) {
    return (
        <div className={clsx(
            'text-slate-900 bg-slate-100',
            'min-h-screen',
        )}>
            <div className={clsx(
                'max-w-screen-lg mx-auto px-8'
            )}>
                {children}
            </div>
        </div>
    )
}
