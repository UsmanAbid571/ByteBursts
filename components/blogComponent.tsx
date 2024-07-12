import React from 'react'
import Link from 'next/link'
import { client } from "@/sanity/lib/client";
import { Post } from "../app/utils/interface";

interface Props {
  post:Post;
}


const blogPage = async ({post}:Props) => {
  return (
<>
   <Link href={`/blog/blogpage/${post.slug.current}`}>
    <div className='max-w-3xl text-justify space-y-2 mx-auto rounded-xl z-20 shadow-2xl bg-[#171720] hover:shadow-slate-400 my-5 text-white cursor-pointer px-10 py-10 hover:z-50 hover:shadow-lg hover:bg-[#171720]'>
     <h1 className='text-2xl cursor-pointer'>{post.title}</h1>
     <p className='text-slate-500 cursor-pointer'>{post.description}</p>
     <p className='text-blue-500 text-xs cursor-pointer'>{new Date(post.publishedAt).toDateString()}</p>
    </div>
    </Link>

    </>
  )
}

export default blogPage
