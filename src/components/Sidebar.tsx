"use client";
import Link from "next/link";
import { Bell, BookmarkSimple, Gear, House, User } from "phosphor-react";
import AuthBtn from "./btns/AuthBtn";
import { useEffect, useState } from "react";
import { pb } from "@/lib/pocketbase";
import { useRouter } from "next/navigation";


export default function Sidebar() {
  const router = useRouter()

  const [user, setUser] = useState();
  useEffect(() => {
    async function getUser() {
      const record = pb.authStore.model?.id;
      if (record) {
        const user = await pb.collection("users").getOne(record);
        setUser(user.username);
      }else {
        router.push("/login")
      }
    }
    getUser();
  }, []);

  console.log(user);
  return (
    <div className="bg-neutral-600 flex flex-col items-center fixed h-[80vh] w-[13rem] rounded-3xl gap-7 mx-4 my-20 p-4">
      <h1 className="text-2xl">Logo</h1>
      <div className="flex flex-col text-xl font-semibold h-full w-5/6 justify-center items-center gap-10">
        <div className="flex items-center w-5/6 gap-2">
          <User size={25} />
          <Link href={`/profile/${user}`}>Profile</Link>
        </div>
        <div className="flex items-center w-5/6 gap-2">
          <House size={25} />
          <Link href="/">Home</Link>
        </div>
        <div className="flex items-center w-5/6 gap-2">
          <Bell size={25} />
          <Link href="/notification">Alerts</Link>
        </div>
        <div className="flex items-center w-5/6 gap-2">
          <BookmarkSimple size={25} />
          <Link href="/saved">Saved</Link>
        </div>
        <div className="flex items-center w-5/6 gap-2">
          <Gear size={25} />
          <Link href="/settings">Settings</Link>
        </div>
      </div>
      <AuthBtn />
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-full p-5"></div>
        <div>
          <h3>{user}</h3>
          <h3 className="font-semibold text-gray-400">@thaleous</h3>
        </div>
      </div>
    </div>
  );
}
