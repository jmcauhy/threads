import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'

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
               <main>
                  <section className="main-container">
                     <div className="w-full max-w-4x1">
                        {children}
                     </div>
                  </section>
               </main>
            </body>
         </html>
      </ClerkProvider>
   )
}

export default RootLayout
