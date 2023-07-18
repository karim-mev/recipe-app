import Post from "@/components/Post";
import NewPostsBtn from "@/components/btns/NewPostsBtn";
import { pb } from "@/lib/pocketbase";

export const revalidate = 5;

async function getPosts() {
  const res = await pb.collection("posts").getFullList({ expand: "likes" });

  return res;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col justify-between items-center w-full px-60 py-20">
      <NewPostsBtn />
      <div className=" min-h-screen rounded-3xl p-4">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </main>
  );
}
