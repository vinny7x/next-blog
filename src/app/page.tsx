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
                <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>

          <PostHeading as='h1' url='#'>
            Rerum, vel ex? Impedit ullam harum blanditiis
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
            harum blanditiis mollitia?
          </p>
        </div>
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
