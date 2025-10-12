import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import clsx from "clsx";
import { PostHeading } from "../PostHeading";

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
            <time className={clsx(
                'text-slate-600 text-sm/tight block'
            )}
                dateTime={createdAt}>
                {`${formatDateTime(createdAt)} (${formatRelativeDate(createdAt)})`}
            </time>
            <PostHeading as={postHeading} url={postLink}>{title}</PostHeading>
            <p>{excerpt}</p>
        </div>
    )
}
