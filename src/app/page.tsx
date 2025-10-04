import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
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
                <PostCoverImage src="/images/bryen_4.png" href='#' alt='Titulo do post' />
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
