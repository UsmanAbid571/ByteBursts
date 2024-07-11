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
    <div className='max-w-3xl text-justify space-y-2 mx-auto mt-24 text-white cursor-pointer px-10'>
     <h1 className='text-2xl cursor-pointer'>{post.title}</h1>
     <p className='text-slate-500 cursor-pointer'>{post.description}</p>
     <p className='text-blue-500 text-xs cursor-pointer'>{new Date(post.publishedAt).toDateString()}</p>
    </div>
    </Link>

    </>
  )
}

export default blogPage
