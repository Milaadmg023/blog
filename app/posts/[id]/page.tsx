import { getPost } from "@/utils/fetch";
import { PostType } from "@/app/page";
//components
import SinglePost from "@/components/singlePost";

export default async function Post({ params }: { params: { id: string } }) {
  const {id} : {id : string} = await params
  const post: PostType = await getPost(id);
  return (
    <>
    <SinglePost post={post} />
    </>
  );
}
