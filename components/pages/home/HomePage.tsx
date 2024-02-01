import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import Collection from '@/components/shared/Collection'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import HeroPost from '@/components/shared/HeroPost'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const {
    overview = [],
    showcaseArticles = [],
    heading = '',
    backgroundImage,
  } = data ?? {}
  const [heroPost, ...articles] = showcaseArticles ?? []
  const bgImage = backgroundImage && urlForImage(backgroundImage)?.url()

  return (
    <>
      <section
        className="relative wrapper h-[80vh] flex flex-col items-center justify-center p-4 z-1 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white absolute h-full w-full flex flex-col overflow-hidden z-0 opacity-60"></div>

        {heading && (
          <h1 className="relative mt-12 hero-heading mb-10 strong text-center break-words text-primary">
            {heading}
          </h1>
        )}
        <div className="relative w-[90] md:w-[60vw] text-center">
          {overview && (
            <CustomPortableText
              value={overview}
              paragraphClasses="text-xl lg:text-3xl"
            />
          )}
        </div>
        <div className="relative flex gap-4 md:gap-8 mt-12">
          <Button size={'lg'} asChild className="font-bold">
            <Link href="/news">Explore Articles</Link>
          </Button>
          <Button variant={'outline'} size={'lg'} asChild className="font-bold">
            <Link href="/about">About us</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper gap-12 bg-accent">
        <h2 className="h2-bold">Featured</h2>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <div className="mt-10 basis-1/3 flex flex-col items-center">
          {articles.length > 0 && (
            <Collection articles={articles} title="More" page={1} />
          )}
          <Button size={'lg'} className="font-bold">
            <Link href="/news">Explore More</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper flex flex-col justify-center items-center text-center bg-accent py-20 md:h-[70vh]">
        <h3 className="h3-bold">
          Want to know more? <br></br>Get in contact with us.
        </h3>
        <Button asChild className="mt-8 font-bold" size={'lg'}>
          <Link href="/contact">Lets talk</Link>
        </Button>
      </section>
    </>
  )
}

export default HomePage
