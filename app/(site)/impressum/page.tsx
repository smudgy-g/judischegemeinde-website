import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import AGBImpressumPage from '@/components/pages/AGBImpressum/AGBImpressumPage'
import { loadImpressumPage } from '@/sanity/loader/loadQuery'
const ImpressumPagePreview = dynamic(
  () => import('@/components/pages/AGBImpressum/AGBImpressumPreview'),
)

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: page } = await loadImpressumPage()

  return {
    title: page?.heading,
    description: (await parent).description,
  }
}

export default async function ImpressumPageRoute() {
  const initial = await loadImpressumPage()

  if (draftMode().isEnabled) {
    return <ImpressumPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <AGBImpressumPage data={initial.data} />
}
