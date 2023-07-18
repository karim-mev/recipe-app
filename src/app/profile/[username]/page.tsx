import React from "react";
import { pb } from "@/lib/pocketbase";
import Post from "@/components/Post";

async function getUserPosts(username: string) {
  const record = await pb.collection("posts").getFullList({
    expand: "likes",
  });
  return record;
}

export default async function Profile({ params }: any) {
  const userPosts = await getUserPosts(params.username);
  return (
    <div className="flex flex-col items-center py-10 px-60 w-full">
      <div className="bg-stone-600 px-40 py-10 rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-full p-20"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">thaleous</h3>
              <button className="bg-stone-500 p-2 text-white font-semibold rounded-xl">
                Edit Profile
              </button>
            </div>
            <div className="flex gap-3">
              <h4 className="font-medium">
                <span className="font-semibold">80</span> followers
              </h4>
              <h4 className="font-medium">
                <span className="font-semibold">79</span> following
              </h4>
            </div>
          </div>
        </div>
        <div className="border-t-2 my-2 ">
          <div className="my-2">
            <div className=" min-h-screen rounded-3xl p-4">
              {userPosts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
