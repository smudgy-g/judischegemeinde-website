import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { PostPage } from '@/components/pages/post/PostPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadPost } from '@/sanity/loader/loadQuery'

const ProjectPreview = dynamic(
  () => import('@/components/pages/post/PostPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: post } = await loadPost(params.slug)
  const ogImage = urlForOpenGraphImage(post?.coverImage)
  return {
    title: post?.title,
    description: post?.excerpt
      ? toPlainText(post?.content)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('post')
}

export default async function PostSlugRoute({ params }: Props) {
  const initial = await loadPost(params.slug)

  if (draftMode().isEnabled) {
    return <ProjectPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <PostPage data={initial.data} />
}
