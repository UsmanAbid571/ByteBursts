import Blogpage from '@/components/blogComponent'
import Header from '@/components/header'
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import Homepage from '@/components/homePage';



export default async  function Home() {
 
  return (
    <div className='min-h-screen'>
    <Homepage/>
    
   
    </div>
  );
}
