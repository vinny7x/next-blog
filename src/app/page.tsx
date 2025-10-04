import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/postHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <Container>
            <Header />
            {/* first post */}
            <section className={clsx(
                'mb-16 gap-8',
                'grid grid-cols-1',
                'md:grid-cols-2',
                'group'
            )}>
                <Link
                    className={clsx(
                        'w-full h-full',
                        'overflow-hidden',
                        'rounded-xl'
                    )}
                    href="#">
                    <Image
                        className={clsx(
                            'group-hover:scale-105 transition',
                            'w-full h-full',
                            'object-cover object-center'
                        )}
                        src='/images/bryen_0.png'
                        width={1200}
                        height={720}
                        alt="Titulo do post"
                        priority />
                </Link>

                <div className={clsx(
                    'flex flex-col gap-4',
                    'sm:justify-center'
                )}>
                    <time className={clsx('text-slate-600 text-sm/tight block')} dateTime="2025-04-20">20/04/2025 10:00</time>
                    <PostHeading url="#" as="h1">oi</PostHeading>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde reiciendis, itaque, laudantium saepe voluptatum corporis id quia repellat eveniet dignissimos quas modi commodi repellendus. Soluta provident mollitia omnis unde.</div>
            </section>

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>
            <footer>
                <p className={clsx(
                    'text-6xl font-bold text-center',
                    'py-8'
                )}>footer</p>
            </footer></Container>
    );
}
