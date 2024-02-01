'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { SocialLinks } from '@/types'

import HamburgerButton from './HamburgerButton'
import NavItems from './NavItems'
import SocialLink from './SocialLinksList'

const MobileNav = ({ socialLinks }: { socialLinks: SocialLinks }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const { facebook, instagram, xTwitter } = socialLinks

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <>
      <HamburgerButton active={isMobileNavOpen} handleClick={toggleMobileNav} />
      {isMobileNavOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-popover-foreground/80 h-screen w-screen"></div>
      )}
      <div
        className={`${
          isMobileNavOpen ? 'right-0' : 'right-[-110%]'
        } md:hidden fixed h-screen right-0 bg-white border-l border-l-black text-4xl flex flex-col items-end z-50 p-14 duration-500 ease-in-out transition-all`}
      >
        <NavItems toggleMobileNav={toggleMobileNav} classesWrapper='flex-1 justify-center'/>
        <div className="flex justify-between w-full">
          {Object.entries(socialLinks).map(([key, value]) => (
            <SocialLink href={value} type={key} key={key} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileNav
