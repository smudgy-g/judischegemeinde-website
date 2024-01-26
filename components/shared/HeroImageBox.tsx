'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { urlForImage } from '@/sanity/lib/utils'

import ImageBox from './ImageBox'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function HeroImageBox(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props || {}

  const image = source ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      {source && (
        <Link href={`/posts/${slug}`} download>
          <ImageBox
            classesWrapper="h-auto w-full"
            width={2000}
            height={1000}
            alt={`${title} cover image`}
            // src={urlForImage(source).height(1000).width(2000).url()}
            imagePlaceholder={source.lqip}
            image={source}
          />
        </Link>
      )}
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
