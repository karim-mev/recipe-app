"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { pb } from "@/lib/pocketbase";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isValid, setIsValid] = useState(false)

  const router = useRouter();

  async function login(data: any) {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.username, data.password);
        // setIsValid(valid)
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const valid = pb.authStore.isValid
    setIsValid(valid)
  }, [])

  console.log(isValid)


  useEffect(() => {
    isValid ? router.push("/") : "";
  }, [isValid]);

  return (
    <div className="py-20 h-screen flex justify-center items-start">
      <div className="invoice flex flex-col items-center p-5 rounded-xl">
        <h1 className="text-2xl mb-5">Login to your account</h1>
        <form
          className="flex flex-col gap-3 w-72"
          onSubmit={handleSubmit(login)}
        >
          <input
            type="text"
            placeholder="username"
            className="bg-gray-700 rounded-xl p-3"
            {...register("username")}
          />
          <input
            type="password"
            placeholder="password"
            className="bg-gray-700 rounded-xl p-3"
            {...register("password")}
          />

          <button
            type="submit"
            className="btn p-3 rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}