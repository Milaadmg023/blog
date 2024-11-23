import { PostType } from "@/app/page";
import { getTagPosts } from "@/utils/fetch";
//components
import Posts from "@/components/home/posts";

export default async function Tag({ params }: { params: Promise<string> & {tag:string}}) {
  const { tag } = params;
  const posts: PostType[] = await getTagPosts(tag);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
