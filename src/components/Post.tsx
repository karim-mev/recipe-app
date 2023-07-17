"use client";
import Image from "next/image";
import { BookmarkSimple, ChatCircle, Heart } from "phosphor-react";
import { useEffect, useState } from "react";
import { pb } from "@/lib/pocketbase";
import { useRouter } from "next/navigation";

type PostProps = {
  post: {
    id: string;
    username: string;
    food: string;
    comments: string
  };
  engages: {
    id: string;
    nb_likes: number;
    users: string;
  };
};

export default function Post({ post, engages }: any) {

  console.log(post)
  const [hearted, setHearted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [postInfo, setPostInfo] = useState(post);
  const [likes, setLikes] = useState<number>(engages.nb_likes);
  

  const sth = `http://127.0.0.1:8090/api/files/posts/${post.id}/${post.food}`;
  const router = useRouter();

  //subscribes to changes

  useEffect(() => {
    const subscribeCallback = (e: any ) => {
      console.log(e.record)
      
        setLikes(e.record.nb_likes);
  
    };

    pb.collection("likes").subscribe(engages.id, subscribeCallback);

    return () => {
      pb.collection("likes").unsubscribe("*");
    };
  }, []);

  // useEffect(() => {
  //   const totalLikes = engages.reduce((sum: number, like: any) => sum + like.nb_likes, 0);
  //   setLikes(totalLikes);
  // }, [engages]);

  //

  async function handleLike() {
    const data = {
      users: "JSON",
      nb_likes: likes + 1,
    };

    const record = await pb.collection("likes").update(engages.id, data);
    setHearted(!hearted);
  }

  return (
    <div className="bg-stone-700 rounded-2xl my-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 p-4">
          <div className="bg-white p-4 rounded-full"></div>
          <h3>{postInfo.username}</h3>
        </div>
        <div className="relative">
          <Image
            src={`${sth}`}
            alt="food"
            width={500}
            height={500}
            // className="rounded-t-xl"
          />
          <div className="absolute bg-black opacity-0 hover:opacity-70 p-4 top-0 left-0 h-full w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            laboriosam!
          </div>
        </div>
        <div className="flex justify-between items-center px-2 py-2">
          <div className="flex gap-2 items-center">
            <Heart
              size={30}
              className={`cursor-pointer ${hearted ? "text-red-400" : ""}`}
              onClick={handleLike}
            />
            {/* <h3 className="font-semibold">100</h3> */}
            <ChatCircle size={30} />
          </div>
          <BookmarkSimple
            size={30}
            className={`cursor-pointer ${saved ? "text-yellow-400" : ""}`}
            onClick={() => setSaved(!saved)}
          />
        </div>
        <h3 className="font-semibold pl-3 pb-2">{likes} likes</h3>
      </div>
    </div>
  );
}
