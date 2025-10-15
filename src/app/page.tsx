import { FeaturedPost } from "@/components/FeaturedPost";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";


export default async function HomePage() {
    return (
        <>
            <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
                <FeaturedPost />
            </Suspense>
            <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
                <PostsList />
            </Suspense>
        </>
    );
}
