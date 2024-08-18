'use client'

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { SheetClose } from '@/components/ui/sheet'


const MobileNav = ({user}: MobileNavProps) => {
  const pathName = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image 
          src='/icons/hamburger.svg'
          width={30}
          height={30}
          alt='menu'
          className='cursor-pointer'
          />
        </SheetTrigger>
          <SheetContent className='border-none bg-white' side='left'>
          <nav className="flex flex-col gap-4">
            <Link 
            href='/'
            className='flex cursor-pointer items-center gap-1 px-4'
            >
                <Image alt='horizon logo' src='/icons/logo.svg' height={34} width={34}/>
                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
            </Link>
            <div className='mobilenav-sheet'>
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((result)=>{
                  const isActive = pathName === result.route || pathName.startsWith(`${result.route}`)
                  return(
                      <SheetClose asChild key={result.route}>
                        
                      <Link
                      href={result.route}
                      key={result.label}
                      className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient':isActive})}
                      >
                          <Image
                          alt={result.label} 
                          src={result.imgURL}
                          width={20}
                          height={20}
                          
                          
                          className={cn({'brightness-[3] invert-0':isActive})}
                          />
                          <p className={cn('sidebar-label', {'!text-white':isActive})}>{result.label}</p>
                      </Link>
                      </SheetClose>
                  )
              })}
                </nav>
              </SheetClose>
            </div>
        </nav>
        </SheetContent>
      </Sheet>

    </section>
  )
}

export default MobileNav