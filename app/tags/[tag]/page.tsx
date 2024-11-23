import { PostType } from "@/app/page";
import { getTagPosts } from "@/utils/fetch";
//components
import Posts from "@/components/home/posts";

export default async function Tag({ params }: { params: { tag: string } }) {
  const posts: PostType[] = await getTagPosts(params.tag);
  console.log(posts);
  
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
