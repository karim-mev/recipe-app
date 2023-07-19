"use client";
import Image from "next/image";
import { BookmarkSimple, ChatCircle, Heart } from "phosphor-react";
import { useEffect, useState } from "react";
import { pb } from "@/lib/pocketbase";
import { useRouter } from "next/navigation";

type PostProps = {
  id: string;
  username: string;
  food: string;
};

export default function Post({ post }: any) {
  const [hearted, setHearted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [postInfo, setPostInfo] = useState(post);
  const [likes, setLikes] = useState<number>(postInfo.likes);
  const [liked, setLiked] = useState<number>(postInfo.likes);

  const sth = `${process.env.NEXT_PUBLIC_POCKETBASE}/api/files/posts/${post.id}/${post.food}`;
  const router = useRouter();

  useEffect(() => {}, [hearted]);

  console.log(pb.authStore.model?.username);

  //subscribes to changes

  useEffect(() => {
    const subscribeCallback = (e: any) => {
      // console.log(e.record);

      setLikes(e.record.likes);
    };

    const subscribeCallbacker = (e: any) => {
      // console.log(e.record);

      setLiked(e.record.likes);
    };

    pb.collection("posts").subscribe(post.id, subscribeCallback);
    // pb.collection("likes").subscribe(likeRecord.id, subscribeCallbacker);

    return () => {
      pb.collection("posts").unsubscribe("*");
    };
  }, []);

  // useEffect(() => {
  //   const totalLikes = engages.reduce((sum: number, like: any) => sum + like.nb_likes, 0);
  //   setLikes(totalLikes);
  // }, [engages]);

  //

  async function handleLike() {
    try {
      const resultList = await pb.collection("likes").getList(1, 1, {
        filter: `user_id = "${pb.authStore.model?.id}" && post_id = "${post.id}"`,
      });
      console.log(resultList.items[0]?.id);
      if (resultList.totalItems === 0) {
        const data = {
          username: post.username,
          likes: likes + 1,
        };
        const record = await pb.collection("posts").update(post.id, data);
        const likeRecord = {
          user_id: pb.authStore.model?.id,
          post_id: post.id,
          liked: true,
        };
        const like = await pb.collection("likes").create(likeRecord);
      } else {
        const data = {
          username: post.username,
          likes: likes - 1,
        };
        const record = await pb.collection("posts").update(post.id, data);
        await pb.collection("likes").delete(resultList.items[0].id);
      }

      console.log(resultList.totalItems);
    } catch (err: any) {
      console.log(err.data);
    }

    // const likeRecord = {
    //   user_id: pb.authStore.model?.id,
    //   post_id: post.id,
    //   liked: true,
    // };

    // const like = await pb.collection("likes").create(likeRecord);

    setHearted(!hearted);
  }

  // @request.auth.id != "" && (user_id != @request.auth.id && post_id != @request.data.post_id)

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
