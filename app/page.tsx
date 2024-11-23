//components
import Hero from "@/components/home/hero";
import Posts from "@/components/home/posts";
//utils
import { getPosts } from "@/utils/fetch";
//types
export type PostType = {
  id: number;
  title: string;
  body: string;
  tags : string[];
  img: string;
  createdAt: string;
}

export default async function Home() {
  const posts: PostType[] = await getPosts();
  return (
    <div className="min-h-screen">
      <Hero />
      <Posts  posts={posts}/>
    </div>
  );
}
