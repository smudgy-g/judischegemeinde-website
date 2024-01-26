'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks } from '@/constants'

const NavItems = () => {
  const pathname = usePathname()
  return (
    <ul className="flex flex-col items-start md:flex-row">
      {navLinks.map((link) => {
        const isActive = pathname === link.route
        return (
          <li key={link.route} className={`${isActive && 'sm:text-blue-600 text-blue-900'} text-white md:text-current font-medium text-3xl md:text-lg px-5 py-3`}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
