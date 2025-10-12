import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

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
            <PostSummary
                createdAt={"2025-04-07T00:24:38.616Z"}
                excerpt={"Em vez de configurar tudo manualmente, basta criar um arquivo com o nome certo e o Next.js entende que aquilo representa uma página."}
                title={"Dicas para manter a saúde mental em dia"}
                postLink={postLink}
                postHeading="h1" />
        </section>
    )
}
