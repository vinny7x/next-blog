import { Container } from "@/components/Container";
import { FeaturedPost } from "@/components/FeaturedPost";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import { Suspense } from "react";


export default async function HomePage() {
    return (
        <Container>
            <Header />
            <Suspense fallback={<SpinLoader />}>
                <FeaturedPost />
            </Suspense>
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
