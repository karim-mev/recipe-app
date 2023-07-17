"use client";
import { pb } from "@/lib/pocketbase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthBtn({ auth }: any) {
  const [isValid, setIsValid] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const valid = pb.authStore.isValid;
    setIsValid(valid);
  }, []);

  function handleLogout() {
    pb.authStore.clear()
    router.refresh()
  }

  return (
    <div>
      {isValid ? (
        <button className="bg-stone-700 py-2 px-5 rounded-xl" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link href="/signup" className="bg-stone-700 py-2 px-5 rounded-xl">
          Sign up
        </Link>
      )}
    </div>
  );
}
