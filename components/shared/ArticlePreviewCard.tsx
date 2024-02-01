import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Article } from '@/types'

import { Button } from '../ui/button'
import AuthorAvatar from './AuthorAvatar'
import ImageBox from './ImageBox'
import ArticleDate from './ArticleDate'

export default function ArticlePreviewCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Article, '_id'>) {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <Link href={`/news/${slug}`} className="hover:underline">
          <ImageBox alt={title} image={coverImage} />
        </Link>
          <CardTitle>
            <Link
              href={`/news/${slug}`}
              className="uppercase tracking-tighter font-bold text-4xl"
            >
              {title}
            </Link>
          </CardTitle>
      </CardHeader>
      <CardContent>
        {date && <ArticleDate dateString={date} />}
        {excerpt && (
          <p className="mb-4 text-sm md:text-md leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {author && <AuthorAvatar name={author.name} picture={author.picture} />}

        <Button asChild variant={'outline'} className="hidden md:visible">
          <Link href={`/news/${slug}`}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
