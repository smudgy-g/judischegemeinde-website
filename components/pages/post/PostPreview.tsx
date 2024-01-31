'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { postBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { Post } from '@/types'

import PostPage from './PostPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<Post | null>
}

export default function PostPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<Post | null>(
    postBySlugQuery,
    params,
    { initial },
  )

  return <PostPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
