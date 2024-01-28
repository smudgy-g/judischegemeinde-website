import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const title = data?.title || ""
  return (
    <footer className="bottom-0 w-full flex justify-between items-center bg-white px-6 py-5 border-t md:py-3">
      {title && <h2 className="text-3xl font-extrabold tracking-tight sm:text-2xl">{title}</h2>}
      {footer && (
        <CustomPortableText
          paragraphClasses="text-md"
          value={footer}
        />
      )}
    </footer>
  )
}
