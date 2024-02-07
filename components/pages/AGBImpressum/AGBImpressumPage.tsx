import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { ImpressumAGBPayload } from '@/types'

export interface PageProps {
  data: ImpressumAGBPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function AGBImpressumPage({ data, encodeDataAttribute }: PageProps) {
  const { heading, content } = data ?? {}

  return (
    <section className="wrapper mt-12">
      <div className="mb-20 space-y-6">
        <Header title={heading} />
        {content && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-2xl text-lg text-gray-600 mx-auto"
            value={content}
          />
        )}
      </div>
    </section>
  )
}

export default AGBImpressumPage
