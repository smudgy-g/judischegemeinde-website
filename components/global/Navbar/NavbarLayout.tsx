import Link from 'next/link'

import ImageBox from '@/components/shared/ImageBox'
import MobileNav from '@/components/shared/MobileNav'
import NavItems from '@/components/shared/NavItems'
import { SettingsPayload, SocialLinks } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const socialLinks = data?.socialMediaLinks || ({} as SocialLinks)
  // const menuItems = data?.menuItems || ([] as MenuItem[])
  const { logo, title = '' } = data

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-b-black bg-white px-4 backdrop-blur md:py-3 w-full">
      <Link href="/" className="text-2xl font-bold">
        {logo ? (
          <ImageBox
            image={logo}
            alt={`${title} cover image`}
            classesWrapper="relative aspect-[16/9]"
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
