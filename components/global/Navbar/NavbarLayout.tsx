import Link from 'next/link'

import MobileNav from '@/components/shared/MobileNav'
import NavItems from '@/components/shared/NavItems'
import type { MenuItem, SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-b-black bg-white px-4 backdrop-blur md:py-3 w-full">
      <Link href="/" className="text-2xl font-bold">
        Judischegemeinde
      </Link>

      <nav className="flex justify-between">
        <div className="hidden md:flex">
          <NavItems />
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}
