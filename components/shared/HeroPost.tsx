import Link from 'next/link'

import { Article } from '@/types'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import AuthorAvatar from './AuthorAvatar'
import HeroImageBox from './HeroImageBox'
import ArticleDate from './ArticleDate'

export default function HeroPost(
  props: Pick<
  Article,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <Card>
      <CardHeader>
        <HeroImageBox slug={slug} title={title!} image={coverImage} priority />
        <CardTitle>
          <Link href={`/news/${slug}`} className="uppercase tracking-tighter font-bold text-4xl">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          {date && <ArticleDate dateString={date} />}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      </CardContent>
      <CardFooter>
        {author && <AuthorAvatar name={author.name} picture={author.picture} />}
      </CardFooter>
    </Card>
  )
}
