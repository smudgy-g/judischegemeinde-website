import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import Collection from '@/components/shared/Collection'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import HeroPost from '@/components/shared/HeroPost'
import type { HomePagePayload, PostPayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  posts?: PostPayload[] | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute, posts }: HomePageProps) {
  const [heroPost, ...morePosts] = posts || []

  const { overview = [], title = '' } = data ?? {}

  return (
    <>
      <section className="bg-gradient-to-tl from-indigo-200 via-red-200 to-yellow-100 wrapper h-[70vh] md:h-[60vh] flex flex-col items-center justify-center p-4">
        <div className=" bg-white border border-black sharp-shadow p-4 md:px-8 lg:px-12 py-12 md:py-20">
          {title && <h1 className="h1-extrabold">{title}</h1>}
          {overview && (
            <div className="mt-12">
              <CustomPortableText
                value={overview}
                paragraphClasses="text-xl lg:text-3xl"
              />
            </div>
          )}
        </div>
        {/* Header */}
      </section>
      <section className="wrapper mt-10 md:mt-8 lg:mt-6 flex flex-col md:flex-row gap-12">
        <div className="flex-grow md:basis-2/3">
          <h3 className="h2-bold">Latest</h3>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </div>
        <div className="basis-1/3">
          {morePosts.length > 0 && (
            <Collection posts={morePosts} title="More" />
          )}
          <button>explore more posts</button>
        </div>
      </section>
    </>
  )
}

export default HomePage
