import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'

import TopBar from "@/components/shared/TopBar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import BottomBar from "@/components/shared/BottomBar"
import '../globals.css'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Threads',
   description: 'Meta\'s Threads clone',
}

function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className={inter.className}>
               <TopBar />

               <main>
                  <LeftSidebar />
                  <section className="main-container">
                     <div className="w-full max-w-4x1">
                        {children}
                     </div>
                  </section>
                  <RightSidebar />
               </main>

               <BottomBar />
            </body>
         </html>
      </ClerkProvider>
   )
}

export default RootLayout
