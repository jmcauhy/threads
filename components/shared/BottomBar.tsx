'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { sidebarLinks } from '@/constants'

function BottomBar() {
   const pathname = usePathname()

   const isActive = useCallback((route: string) => (
      pathname.includes(route) && route.length > 1 || pathname === route
   ), [])

   return (
      <section className="bottombar">
         <div className="bottombar_container">
            {sidebarLinks.map(({ label, route, imgURL }) => (
               <Link
                  key={label}
                  href={route}
                  className={`${isActive(route) && 'bg-primary-500'} bottombar_link`}
               >
                  <Image src={imgURL} alt={label} width={24} height={24} />
                  <p className="text-subtle-medium text-light-1 max-sm:hidden">
                     {label.split(/\s+./)[0]}
                  </p>
               </Link>
            ))}
         </div>
      </section>
   )
}

export default BottomBar
