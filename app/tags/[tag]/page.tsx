import { PostType } from "@/app/page";
import { getTagPosts } from "@/utils/fetch";
//components
import Posts from "@/components/home/posts";

export interface TagProps {
  params: { tag: string };
}

export default async function Tag({ params }: TagProps) {
  const { tag } = params;
  const posts: PostType[] = await getTagPosts(tag);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
