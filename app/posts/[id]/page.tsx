import { getPost } from "@/utils/fetch";
import { PostType } from "@/app/page";
import SinglePost from "@/components/singlePost";

export default async function Post({ params }: { params: { id: string } }) {
  const post: PostType = await getPost(params.id);
  return (
    <>
    <SinglePost post={post} />
    </>
  );
}
