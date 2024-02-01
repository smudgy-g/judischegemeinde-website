'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { articleBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { Article } from '@/types'

import ArticlePage from './ArticlePage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<Article | null>
}

export default function ArticlePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<Article | null>(
    articleBySlugQuery,
    params,
    { initial },
  )

  return <ArticlePage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
