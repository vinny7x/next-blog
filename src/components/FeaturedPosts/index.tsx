import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function FeaturedPost() {
    const slug = 'qualquercoisa'
    const postLink = `/post/${slug}`

    return (
        <section className={clsx(
            'mb-16 gap-8',
            'grid grid-cols-1',
            'md:grid-cols-2',
            'group'
        )}>
            <PostCoverImage src="/images/bryen_4.png" href={postLink} alt='Titulo do post' />
            <div className='flex flex-col gap-4 sm:justify-center'>
                <time
                    className='text-slate-600 block text-sm/tight'
                    dateTime='2025-04-20'
                >
                    20/04/2025 10:00
                </time>
                <PostHeading as='h1' url={postLink}>
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
    )
}
