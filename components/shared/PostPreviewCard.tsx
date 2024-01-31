import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Post } from '@/types'

import { Button } from '../ui/button'
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
}: Omit<Post, '_id'>) {
  return (
    <Card className='max-w-md'>
      <CardHeader>
        <Link href={`/posts/${slug}`} className="hover:underline">
          <ImageBox alt={title} image={coverImage} />
        </Link>
        <CardDescription>
        <CardTitle>
          <Link
            href={`/posts/${slug}`}
            className="uppercase tracking-tighter font-bold text-4xl text-black"
          >
            {title}
          </Link>
        </CardTitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {date && <PostDate dateString={date} />}
        {excerpt && (
          <p className="mb-4 text-sm md:text-md leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
      {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        

        <Button asChild variant={'outline'} className="hidden md:visible">
          <Link href={`/posts/${slug}`}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
