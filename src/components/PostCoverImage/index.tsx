import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

type PostCoverImageProps = {
    href: string,
    src: string,
    alt: string,
    priority?: boolean
}

export function PostCoverImage({ href, src, alt, priority = false }: PostCoverImageProps) {
    return (
        <Link
            className={clsx(
                'w-full h-full',
                'overflow-hidden',
                'rounded-xl'
            )}
            href={href}>
            <Image
                className={clsx(
                    'group-hover:scale-105 transition',
                    'w-full h-full',
                    'object-cover object-center'
                )}
                src={src}
                width={1200}
                height={720}
                alt={alt}
                priority={priority} />
        </Link>
    )
}
