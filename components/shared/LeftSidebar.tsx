'use client'

import { useCallback } from 'react'
import { SignOutButton, SignedIn } from "@clerk/nextjs"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { sidebarLinks } from '@/constants'

function LeftSidebar() {
   const router = useRouter(),
         pathname = usePathname()

   const isActive = useCallback((route: string) => (
      pathname.includes(route) && route.length > 1 || pathname === route
   ), [])

   return (
      <section className="custom-scrollbar leftsidebar">
         <div className="flex w-full flex-1 flex-col gap-6 px-6">
            {sidebarLinks.map(({ label, route, imgURL }) => (
               <Link
                  key={label}
                  href={route}
                  className={`${isActive(route) && 'bg-primary-500'} leftsidebar_link`}
               >
                  <Image src={imgURL} alt={label} width={24} height={24} />
                  <p className="text-light-1 max-lg:hidden">{label}</p>
               </Link>
            ))}
         </div>

         <div className="mt-10 px-6">
            <SignedIn>
               <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                  <div className="flex cursor-pointer gap-4 p-4">
                     <Image
                        src="/assets/logout.svg"
                        alt="logout"
                        width={24}
                        height={24}
                        />
                     <p className="text-light-2 max-lg:hidden">Logout</p>
                  </div>
               </SignOutButton>
            </SignedIn>
         </div>
      </section>
   )
}

export default LeftSidebar
