export interface Post {
    _id: string;
    title: string
    slug: { current: string };
    publishedAt: string;
    description: string;
   // body: any;
    
    
  }