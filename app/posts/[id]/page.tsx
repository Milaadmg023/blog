import { getPost } from "@/utils/fetch";
import { PostType } from "@/app/page";
//components
import SinglePost from "@/components/singlePost";
type ProductDetailsPageProp = {
  params: ProductDetailsPageParam;
};

type ProductDetailsPageParam = {
  id: string;
};


export default async function Post({ params }: ProductDetailsPageProp) {
  const { id } = params;
  const post: PostType = await getPost(id);
  return (
    <>
    <SinglePost post={post} />
    </>
  );
}
