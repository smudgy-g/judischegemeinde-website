import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import Collection from '@/components/shared/Collection'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import HeroPost from '@/components/shared/HeroPost'
import { Button } from '@/components/ui/button'
import type { HomePagePayload, PostPayload } from '@/types'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const { overview = [], title = '', showcasePosts = [] } = data ?? {}
  const [heroPost, ...posts] = showcasePosts

  return (
    <>
      <section className="wrapper h-[70vh] md:h-[60vh] flex flex-col items-center justify-center p-4 z-1">
        <div className="bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500 absolute -top-[60px] h-[70vh] min-h-[320px] max-h-[600px] w-full -skew-y-6 flex flex-col overflow-hidden z-0"></div>

        {title && (
          <h1 className="relative mt-12 h1-extrabold mb-10 strong text-center break-words">
            {title}
          </h1>
        )}
        {/* <div className="relative  mt-12 flex flex-col items-center"> */}
        {/* <div className="relative flex flex-col justify-evenly px-3 md:px-8 mt-12 py-6 w-full max-w-xl bg-white border border-black"> */}
        <Card className="relative mt-12 flex flex-col max-w-xl px-3 md:px-8  py-6">
          <CardContent>
            {overview && (
              <CustomPortableText
                value={overview}
                paragraphClasses="text-xl lg:text-3xl"
              />
            )}
          </CardContent>
          <CardFooter className="flex gap-4 justify-start">
            <Button size={'lg'} asChild className="font-bold">
              <Link href="/posts">Explore Posts</Link>
            </Button>
            <Button
              variant={'secondary'}
              size={'lg'}
              asChild
              className="font-bold"
            >
              <Link href="/about">About us</Link>
            </Button>
          </CardFooter>
        </Card>
        {/* <div className="flex gap-4 mt-8">
            </div>
          </div>
        </div> */}
        {/* Header */}
      </section>
      <section className="wrapper mt-10 md:mt-8 lg:mt-6 gap-12">
        {/* <section className="wrapper mt-10 md:mt-8 lg:mt-6 flex flex-col md:flex-row gap-12"> */}
        {/* <div className="flex-grow md:basis-2/3"> */}
        <h3 className="h2-bold">Featured</h3>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {/* </div> */}
        <div className="mt-10 basis-1/3 flex flex-col items-center">
          {posts.length > 0 && <Collection posts={posts} title="More" />}
          <Button size={'lg'}>
            <Link href="/posts">Explore More</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper text-center my-20">
        <h3 className="h3-bold">
          Want to know more? <br></br>Get in contact with us.
        </h3>
        <Button asChild className="mt-8" size={'lg'}>
          <Link href="/contact">Lets talk</Link>
        </Button>
      </section>
    </>
  )
}

export default HomePage
