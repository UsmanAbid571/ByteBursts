import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div>
     <header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font items-center text-gray-200 font-semibold mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Byte Bursts</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5   text-gray-200 hover:text-gray-500">Home</Link>
      <Link href="/blog" className="mr-5 text-gray-200  hover:text-gray-500">Blog</Link>
      <Link href="#about" className="mr-5  text-gray-200 hover:text-gray-500">About</Link>
      <Link href="#newsletter" className="mr-5  text-gray-200 hover:text-gray-500">Newsletter</Link>
      <Link href="#contact" className="mr-5 text-gray-200  hover:text-gray-500">Contact</Link>
      <Link href="/admin" className="mr-5 text-gray-200  hover:text-gray-500">Admin</Link>
      
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar
