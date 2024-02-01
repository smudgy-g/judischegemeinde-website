import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import ArticleDate from '@/components/shared/ArticleDate'
import AuthorAvatar from '@/components/shared/AuthorAvatar'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { Article } from '@/types'

export interface ArticlePageProps {
  data: Article | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ArticlePage({ data, encodeDataAttribute }: ArticlePageProps) {
  const { coverImage, title, author, content, excerpt, date } = data ?? {}

  return (
    <section className="wrapper mt-12">
      <div className="mb-20 space-y-6">
        <Header title={title} description={excerpt} />
        {date && <ArticleDate dateString={date} />}
        {author && <AuthorAvatar name={author.name} picture={author.picture} />}
        <div className="rounded-md border">
          <ImageBox
            data-sanity={encodeDataAttribute?.('coverImage')}
            image={coverImage}
            alt={`${title} cover image`}
            classesWrapper="relative aspect-[16/9]"
          />
        </div>

        {content && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-2xl text-lg text-gray-600 mx-auto"
            value={content}
          />
        )}
      </div>
    </section>
  )
}

export default ArticlePage
