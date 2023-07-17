"use client";

import { useRouter } from "next/navigation";

export default function NewPostsBtn() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.refresh()}
      className="bg-stone-600 p-2 rounded-xl">New Posts</button>
    </div>
  );
}
