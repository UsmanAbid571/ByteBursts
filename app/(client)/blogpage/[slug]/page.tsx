import React from 'react'
import Header from '@/components/header'
import { client } from "@/sanity/lib/client";
import { Post } from "../../../utils/interface";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

interface Params {
    params: {
      slug: string;
    };
  }


async function getPost(slug: string) {
    const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
      title,
      slug,
      publishedAt,
      excerpt,
      _id,
      body,
    //   tags[]-> {
    //     _id,
    //     slug,
    //     name
    //   }
    }
    `;
    const post = await client.fetch(query);
  return post;
}
export const revalidate = 60;
const Blogpage = async ({params}:Params) => {

    const post: Post = await getPost(params?.slug);

  return (
    <div className='text-white  text-center'>
     <h1 className='text-4xl text-blue-700 font-bold my-14'>{post.title}</h1>
      <div className='w-[100%] h-[0.25px] bg-slate-500 '></div>
      <div className={richTextStyles}>
      <PortableText value={post?.body} />
      </div>

    </div>
  )
}

export default Blogpage

// const myPortableTextComponents = {
//     types: {
//       image: ({ value }: any) => (
//         <Image
//           src={urlForImage(value).url()}
//           alt="Post"
//           width={700}
//           height={700}
//         />
//       ),
//     },
//   };
const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
min-h-screen


`;