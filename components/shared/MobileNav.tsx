'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import NavItems from './NavItems'
import HamburgerButton from './HamburgerButton'

const MobileNav = () => {
  const pathname = usePathname()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }
  return (
    <>
      <HamburgerButton active={isMobileNavOpen} handleClick={toggleMobileNav} />
      {isMobileNavOpen && <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/70 h-screen w-screen"></div>}
      <div
        className={`${
          isMobileNavOpen ? 'right-0' : 'right-[-110%]'
        } md:hidden fixed h-screen right-0 bg-white border-l border-l-black text-4xl flex flex-col justify-around items-end z-50 p-14 duration-500 ease-in-out transition-all`}
      >
        <NavItems toggleMobileNav={toggleMobileNav} />
      </div>
    </>
  )
}

export default MobileNav
