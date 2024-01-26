import Link from 'next/link'

import { PostPayload } from '@/types'

import AuthorAvatar from './AuthorAvatar'
import HeroImageBox from './HeroImageBox'
import PostDate from './PostDate'

export default function HeroPost(
  props: Pick<
    PostPayload,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  console.log('image', coverImage)
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <HeroImageBox slug={slug} title={title!} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <Link href={`/posts/${slug}`} className="hover:underline">
            <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
              {title || 'Untitled'}
            </h3>
          </Link>
          <div className="mb-4 text-lg md:mb-0">
            <PostDate dateString={date!} />
          </div>
        </div>
        <div>
          {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        </div>
      </div>
    </section>
  )
}
