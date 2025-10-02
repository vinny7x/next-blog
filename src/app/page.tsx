import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <div>
            <header>
                <h1 className="text-6xl font-bold py-8 text-center">aqui é a header</h1>
            </header>
            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>
            <footer>
                <p className="text-6xl font-bold py-8 text-center">footer</p>
            </footer>
        </div>

    );
}
