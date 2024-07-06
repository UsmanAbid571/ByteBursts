import Blogpage from '@/components/blogComponent'
import Header from '@/components/header'
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";


async function getPosts() {
  const query = ` 
  *[_type == "post"] {
    _id,
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

export default async  function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts)
  
  return (
    <div>
    <div>
      <Header title="Blogs"/>
    </div>
    {posts?.length > 0 &&
          posts?.map((post) => <Blogpage key={post._id} post={post} />)}
    
   
    </div>
  );
}
