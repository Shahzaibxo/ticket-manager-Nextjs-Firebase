"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
const Navbar = () => {
    const path=usePathname()
  const link=[
    {label:"Dashboard",href:"/"},
    {label:"Issues",href:"/issues"}
  ]
    return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"><AiFillBug/></Link>
      <ul className='flex space-x-6'>
        {
        link.map(singlink=>
            <li key={singlink.href}>
            <Link href={singlink.href} className={`${singlink.href===path?"text-zinc-900 font-semibold":"text-zinc-500"} hover:text-zinc-800 transition-colors`}>{singlink.label}</Link>
            </li>
        
        )
        }
        
      </ul>
    </nav>
  )
}

export default Navbar
