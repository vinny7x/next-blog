import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime"
import clsx from "clsx"

type postDateProps = {
    dateTime: string
}

export function PostDate({ dateTime }: postDateProps) {
    return (
        <time className={clsx(
            'text-slate-600 text-sm/tight block'
        )}
            dateTime={dateTime}>
            {`${formatDateTime(dateTime)} (${formatRelativeDate(dateTime)})`}
        </time>
    )
}
