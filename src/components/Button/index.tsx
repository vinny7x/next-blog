import clsx from "clsx";
import React from "react";
type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonProps = {
    variant?: ButtonVariants;
    size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({ variant = 'default', size = 'md', ...props }: ButtonProps) {
    const buttonVariants: Record<ButtonVariants, string> = {
        default: clsx('bg-blue-600 text-blue-100', 'hover:bg-blue-700 hover-'),
        ghost: clsx('bg-slate-300 text-slate-900', 'hover:bg-slate-400'),
        danger: clsx('bg-red-600 text-red-100', 'hover:bg-red-700')
    };
    const buttonSizes: Record<ButtonSizes, string> = {
        sm: clsx(
            'text-xs/tight rounded-sm',
            'py-1 px-2 gap-1',
            '[&_svg]:w-3 [&_svg]:h-3'
        ),
        md: clsx(
            'text-base/tight rounded-md',
            'py-2 px-4 gap-2',
            '[&_svg]:w-4 [&_svg]:h-4'

        ),
        lg: clsx(
            'text-lg/tight rounded-lg',
            'py-4 px-6 gap-3',
            '[&_svg]:w-5 [&_svg]:h-5'
        )
    };
    const buttonClasses = clsx(buttonVariants[variant], buttonSizes[size],
        'flex items-center',
        'cursor-pointer transition',
        'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed',
        props.className,
    );
    console.log(buttonVariants[variant]);
    return <button {...props} className={buttonClasses}  />;
}
