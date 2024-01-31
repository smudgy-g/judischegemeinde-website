import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import AuthorAvatar from '@/components/shared/AuthorAvatar'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import PostDate from '@/components/shared/PostDate'
import type { AboutPagePayload, Post } from '@/types'

export interface PageProps {
  data: AboutPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function AboutPage({ data, encodeDataAttribute }: PageProps) {
  const { coverImage, title, content, overview } = data ?? {}

  return (
    <section className="wrapper mt-12">
      <div className="mb-20 space-y-6">
        <Header title={title} description={overview} />
        {coverImage && (
          <div className="rounded-md border">
            <ImageBox
              data-sanity={encodeDataAttribute?.('coverImage')}
              image={coverImage}
              alt={`${title} cover image`}
              classesWrapper="relative aspect-[16/9]"
            />
          </div>
        )}
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

export default AboutPage
