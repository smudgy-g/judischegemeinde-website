import Link from 'next/link'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Article } from '@/types'

import ArticleDate from './ArticleDate'
import AuthorAvatar from './AuthorAvatar'
import ImageBox from './ImageBox'

export default function ArticlePreviewCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Article, '_id'>) {
  return (
    <Card className="flex flex-col max-w-md">
      <CardHeader>
        <Link href={`/news/${slug}`} className="hover:underline">
          <ImageBox alt={title} image={coverImage} />
        </Link>
        <CardTitle>
          <Link
            href={`/news/${slug}`}
            className="uppercase tracking-tighter font-bold text-3xl"
          >
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        {date && <ArticleDate dateString={date} />}
        {excerpt && (
          <p className="mb-4 text-sm md:text-md leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}
      </CardContent>
      <CardFooter className="">
        {author && <AuthorAvatar name={author.name} picture={author.picture} />}
      </CardFooter>
    </Card>
  )
}
