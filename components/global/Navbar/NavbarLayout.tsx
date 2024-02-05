import Image from 'next/image'
import Link from 'next/link'

import ImageBox from '@/components/shared/ImageBox'
import MobileNav from '@/components/shared/MobileNav'
import NavItems from '@/components/shared/NavItems'
import { urlForImage } from '@/sanity/lib/utils'
import { SettingsPayload, SocialLinks } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const socialLinks = data?.socialMediaLinks || ({} as SocialLinks)
  // const menuItems = data?.menuItems || ([] as MenuItem[])
  const { logoImage, title = '' } = data
  const logoImageUrl = logoImage && urlForImage(logoImage)?.url()

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-b-black bg-white px-4 backdrop-blur py-1 md:py-3 w-full">
      <Link href="/" className="text-2xl font-bold">
        {logoImage ? (
          <Image
            src={logoImageUrl}
            alt={`${title} cover image`}
            height={80}
            width={500}
            className="object-contain max-h-[80px] w-auto"
          />
        ) : (
          title
        )}
      </Link>

      <nav className="flex justify-between items-center">
        <div className="hidden md:flex">
          <NavItems />
        </div>
        <div className="flex md:hidden">
          <MobileNav socialLinks={socialLinks} />
        </div>
      </nav>
    </div>
  )
}
