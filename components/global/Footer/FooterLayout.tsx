import type { PortableTextBlock } from '@portabletext/types'
import Link from 'next/link'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import SocialLink from '@/components/shared/SocialLinksList'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  const title = data?.title || ''
  const pressKitURL = data?.press_kitURL
  const socialLinks = data?.socialMediaLinks || {}

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
      <div className="space-y-3 flex md:basis-1/2 flex-col md:flex-row-reverse justify-between md:items-center">
        <div className="flex flex-col gap-2 items-end">
          <Link href="/impressum" className="link">
            Impressum
          </Link>
          <Link href="/agb" className="link">
            AGBs
          </Link>
          {pressKitURL && (
            <Link href={`${pressKitURL}?dl=`} className="link">
            Press Kit
          </Link>
          )}
        </div>
        <div className="flex items-end md:gap-2">
          <div className="flex gap-3 w-full">
            {Object.entries(socialLinks).map(([key, value]) => {
              if (value && value.trim() !== '') {
                return (
                  <SocialLink href={value} type={key} key={key} size={20} />
                )
              }
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
