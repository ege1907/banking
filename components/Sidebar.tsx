'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
  const pathName = usePathname()
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link 
            href='/'
            className='flex mb-12 cursor-pointer items-center gap-2'
            >
                <Image alt='horizon logo' src='/icons/logo.svg' height={34} width={34} className='size-[24px] max-xl:size-14' />
                <h1 className="sidebar-logo">Horizon</h1>
            </Link>

            {sidebarLinks.map((result)=>{
                const isActive = pathName === result.route || pathName.startsWith(`${result.route}/`)
                return(
                    <Link
                    href={result.route}
                    key={result.label}
                    className={cn('sidebar-link', {'bg-bank-gradient':isActive})}
                    >
                        <div className="relative size-6">
                        <Image
                        alt={result.label} 
                        src={result.imgURL}
                        fill
                        
                        className={cn({'brightness-[3] invert-0':isActive})}
                        />
                        </div>
                        <p className={cn('sidebar-label', {'!text-white':isActive})}>{result.label}</p>
                    </Link>
                )
            })}
        </nav>
    </section>
  )
}

export default Sidebar