import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import AboutPage from '@/components/pages/about/AboutPage'
import { loadAboutPage } from '@/sanity/loader/loadQuery'
const AboutPagePreview = dynamic(
  () => import('@/components/pages/about/AboutPreview'),
)

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: page } = await loadAboutPage()

  return {
    title: page?.title,
    description: page?.overview
      ? toPlainText(page.overview)
      : (await parent).description,
  }
}

export default async function AboutPageRoute() {
  const initial = await loadAboutPage()

  if (draftMode().isEnabled) {
    return <AboutPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <AboutPage data={initial.data} />
}
