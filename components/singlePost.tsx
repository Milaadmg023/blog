import { PostType } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
export default function SinglePost({ post }: { post: PostType }) {
  if (!post) {
    return (
      <div className="text-center flex flex-col gap-4 min-h-screen">
        <h1>مطلب مورد نظر وجود ندارد!</h1>
        <Link href="/">بازگشت به خانه</Link>
      </div>
    )
  }
  return (
    <section>
      <h1 className="text-2xl text-center m-2">{post.title}</h1>
      <Image
        src={post.img}
        width={600}
        height={600}
        alt={post.title}
        className="mx-auto rounded-lg"
      />
      <div className="m-2 md:max-w-[80%] mx-auto">
        <p>{post.body}</p>
        <div className="flex gap-2 mt-5 text-pink-400">
          {post.tags.map((tag, index) => {
            return (
                <Link key={index} href={`/tags/${tag}`}>{tag}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
