import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6 fixed w-full shadow-xl lg:px-40">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src="/logo.svg" alt="logo" width={30} height={30}></Image>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white" onClick={()=>setOpen(!open)}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full ${open?'block':'hidden'} flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Examples
          </a>
          <Link href="/#pricing">
            <p className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Pricing
            </p>
          </Link>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <a href="#" className="inline-block px-4 py-3 leading-none border rounded text-white border-pink-500 hover:border-white mt-4 lg:mt-0">Go to dashboard</a>
        </div>
      </div>
    </nav>
  )
}

export default Header