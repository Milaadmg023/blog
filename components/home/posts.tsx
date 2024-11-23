import { PostType } from "@/app/page";
import Link from "next/link";


export default function Posts({ posts }: { posts: PostType[] }) {
  if (!posts) {
    return (
      <div className="text-center text-xl">
        <h1>مطلب مورد نظر وجود ندارد ⚠</h1>
        <Link href="/">بازگشت به خانه</Link>
      </div>
    )
  }
  return (
    <section className="md:max-w-[80%] mx-auto">
      {posts.map((post)=>{
       return(
              <div key={post.id} className="border-t flex min-h-[100px]">
                <div className="hidden md:block py-3 px-10 text-gray-400 ">{post.createdAt.split("|")[0]}</div>
                <div className="p-2 flex flex-col gap-1">
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="flex gap-2">{post.tags.map((tag , index)=>{
                    return(
                      <Link href={`/tags/${tag}`} className="text-pink-400 text-sm" key={index}>{tag}</Link>
                    )
                  })}</p>
                  <p>{post.body.split(".")[0]}</p>
                  <Link href={`/posts/${post.id}`} className="bg-blue-400 text-white p-1 rounded-lg w-fit">بیشتر بخوانید</Link>
                </div>
              </div>
       )
      })}
    </section>
  );
}
