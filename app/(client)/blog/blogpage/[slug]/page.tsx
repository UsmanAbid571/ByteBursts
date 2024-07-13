import React from 'react'
import Header from '@/components/header'
import { client } from "@/sanity/lib/client";
import { Post } from "../../../../utils/interface";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import "./page.css"
import { Author } from '../../../../utils/interface';
import Profile from '../../../../../assets/profile.png'
import CodeBlock from '@/components/codeBlock';

interface Params {
  params: {
    slug: string;
  };
}

async function getAuthor() {
  const query = `
    *[_type == "author"] {
      name,
      image
    }
    `;
  const author = await client.fetch(query);
  return author;
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
const Blogpage = async ({ params }: Params) => {

  const post: Post = await getPost(params?.slug);

  const author: Author = await getAuthor();

  return (
    <>
      <div className='text-white  text-center'>
        <h1 className='text-5xl text-blue-700 font-bold my-14'>{post.title}</h1>
        <div className='w-[100%] h-[0.25px] bg-slate-500 '></div>
        <div className="blogDisplay">
          <PortableText value={post?.body} components={myPortableTextComponents} />
        </div>
      </div>
      <div className='flex items-center max-w-sm mx-auto justify-start '>
        <Image src={Profile} alt="Author" width={80} height={80} className=' rounded-full invert' />
        <p className='text-lg mx-3 text-gray-300'>Muhammad Usman Abid</p>

      </div>
    </>
  )
}

export default Blogpage

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={700}
        height={700}
        className='mb-5'
      />
    ),
    code: ({ value }: any) => {
      return <CodeBlock value={value} />
    },
  },
};
