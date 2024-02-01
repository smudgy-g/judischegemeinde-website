'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { aboutPageQuery, articleBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { AboutPagePayload, Article } from '@/types'

import AboutPage from './AboutPage'


type Props = {
  initial: QueryResponseInitial<AboutPagePayload | null>
}

export default function AboutPreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<AboutPagePayload | null>(
    aboutPageQuery,
    {},
    { initial },
  )

  return <AboutPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
