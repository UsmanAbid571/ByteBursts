import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div>
      <nav className='py-5 px-5 flex justify-between items-center '>
      <div className='text-3xl font-bold text-slate-200'>Byte Bursts</div>
        <ul className="flex justify-around gap-4 text-lg font-semibold text-slate-200">
       
            <Link href="/"><li>Home</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="#newsletter"><li>Newsletter</li></Link>
            <Link href="#about"><li>About</li></Link>
            <Link href="#contact"><li>Contact</li></Link>
            <Link href="/studio"><li>Admin</li></Link>
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar
