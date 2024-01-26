import Link from 'next/link'

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
    <div>
      <div className="mb-5">
        <Link href={`/posts/${slug}`} className="hover:underline">
          <ImageBox alt={title} image={coverImage} />
        </Link>
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        {date && <PostDate dateString={date} />}
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      {author && <AuthorAvatar name={author.name} picture={author.picture} />}
    </div>
  )
}
