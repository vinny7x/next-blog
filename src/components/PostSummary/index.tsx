import clsx from "clsx";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type postSummaryProps = {
    postHeading: 'h1' | 'h2';
    postLink: string;
    createdAt: string;
    title: string;
    excerpt: string
}

export function PostSummary({ postHeading, postLink, createdAt, title,excerpt }: postSummaryProps) {
    return (
        <div className={clsx(
            'flex flex-col gap-4',
            'sm:justify-center'
        )}>
            <PostDate dateTime={createdAt}/>
            <PostHeading as={postHeading} url={postLink}>{title}</PostHeading>
            <p>{excerpt}</p>
        </div>
    )
}
