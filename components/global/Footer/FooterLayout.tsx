import type { PortableTextBlock } from '@portabletext/types'
import Link from 'next/link'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const title = data?.title || ''
  return (
    <footer className="bottom-0 w-full flex flex-row justify-between md:items-center bg-white px-6 py-5 border-t md:py-3">
      <div>
        {title && (
          <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
            {title}
          </h2>
        )}
        {footer && (
          <CustomPortableText
            paragraphClasses="text-sm md:text-md"
            value={footer}
          />
        )}
      </div>
      <div className='flex flex-col md:flex-row items-end md:gap-2'>
        <Link href="/impressum" className='link'>Impressum</Link>
        <Link href="/agb" className='link'>AGBs</Link>
      </div>
    </footer>
  )
}
