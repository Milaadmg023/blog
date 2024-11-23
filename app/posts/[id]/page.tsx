import { getPost } from "@/utils/fetch";
import { PostType } from "@/app/page";
//components
import SinglePost from "@/components/singlePost";

export default async function Post({ params }: { params: Promise<string> & {id:string}}) {
  const {id}  = params
  const post: PostType = await getPost(id);
  return (
    <>
    <SinglePost post={post} />
    </>
  );
}
