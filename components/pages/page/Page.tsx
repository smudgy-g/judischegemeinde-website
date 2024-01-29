import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  const { body, overview, title } = data ?? {}

  return (
    <div className="mb-14 wrapper mt-20">
      {/* Header */}
      <Header title={title} description={overview} />

      {/* Body */}
      <div className="mt-20 space-y-8">
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-2xl text-gray-600 text-lg mx-auto"
            value={body}
          />
        )}
      </div>
    </div>
  )
}

export default Page
