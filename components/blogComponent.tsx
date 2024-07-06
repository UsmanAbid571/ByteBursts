import React from 'react'
import Link from 'next/link'
import { client } from "@/sanity/lib/client";
import { Post } from "../app/utils/interface";

interface Props {
  post:Post;
}

async function getPosts() {
  const query = ` 
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    body,
    description,
    // tags[]-> {
    //   slug,
    //   name
    // }
  }
  `;
  const data = await client.fetch(query);
  return data;
}
const blogPage = async ({post}:Props) => {
  //const posts = await getPosts();
  return (
<>
   <Link href="">
    <div className='max-w-2xl text-justify space-y-2 mx-auto mt-24 text-white cursor-pointer'>
     <h1 className='text-2xl cursor-pointer'>{post.title}</h1>
     <p className='text-slate-500 cursor-pointer'>{post.description}</p>
     <p className='text-blue-500 text-xs cursor-pointer'>{new Date(post.publishedAt).toDateString()}</p>
    </div>
    </Link>

    </>
  )
}

export default blogPage
