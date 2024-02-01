import { format, parseISO } from 'date-fns'

export default function ArticleDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <time className="text-md lg:text-lg font-serif text-gray-600" dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}
