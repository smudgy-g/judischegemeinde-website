import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { ArticlePage } from '@/components/pages/article/ArticlePage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadArticle } from '@/sanity/loader/loadQuery'

const ArticlePreview = dynamic(
  () => import('@/components/pages/article/ArticlePreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: article } = await loadArticle(params.slug)
  const ogImage = urlForOpenGraphImage(article?.coverImage)
  return {
    title: article?.title,
    description: article?.excerpt
      ? toPlainText(article?.content)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('article')
}

export default async function ArticleSlugRoute({ params }: Props) {
  const initial = await loadArticle(params.slug)

  if (draftMode().isEnabled) {
    return <ArticlePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ArticlePage data={initial.data} />
}
