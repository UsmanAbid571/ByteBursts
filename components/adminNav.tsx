import React from 'react'
import Link from 'next/link'

const AdminNav = () => {
  return (
    <>
      <div className=" text-lg font-bold flex justify-between px-4 py-6 text-white">
        <span ><Link href="/">Back</Link></span>
        <span className='text-blue-500 text-3xl'>Byte Bursts</span>
        <h1>Admin</h1>

      </div>
    </>
  )
}

export default AdminNav
