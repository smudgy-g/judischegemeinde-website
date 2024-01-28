import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PostPayload } from '@/types'

import AuthorAvatar from './AuthorAvatar'
import ImageBox from './ImageBox'
import PostDate from './PostDate'

export default function PostPreviewCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<PostPayload, '_id'>) {
  return (
    <Card>
      <CardHeader>
        <Link href={`/posts/${slug}`} className="hover:underline">
          <ImageBox alt={title} image={coverImage} />
        </Link>
        <CardTitle>
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          {date && <PostDate dateString={date} />}
        </CardDescription>
      </CardHeader>
        <CardContent>
          {excerpt && <p className="mb-4 text-lg leading-relaxed line-clamp-2">{excerpt}</p>}
        </CardContent>
        <CardFooter>
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        </CardFooter>
    </Card>
  )
}
