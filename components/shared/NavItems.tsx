'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'

const NavItems = ({
  toggleMobileNav,
  classesWrapper
}: {
  toggleMobileNav?: () => void,
  classesWrapper?: string
}) => {
  const pathname = usePathname()
  return (
    <ul className={cn("flex flex-col items-start md:flex-row", classesWrapper)}>
      {navLinks.map((link) => {
        const isActive = pathname === link.route
        return (
          <li
            key={link.route}
            className={`${isActive && 'text-primary'}  text-3xl md:text-lg px-5 py-3 link`}
          >
            {toggleMobileNav ? (
              <Link href={link.route} onClick={toggleMobileNav}>
                {link.label}
              </Link>
            ) : (
              <Link href={link.route}>{link.label}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
