"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { pb } from "@/lib/pocketbase";

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();

  async function signUp(data: any) {
    try {
      const info = {
        username: data.username,
        email: data.email,
        emailVisibility: true,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        name: "test",
      };

      const record = await pb.collection("users").create(info);
    //   router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const valid = pb.authStore.isValid;
    setIsValid(valid);
  }, []);

  console.log(isValid);

  //   useEffect(() => {
  //     isValid ? router.push("/") : "";
  //   }, [isValid]);

  return (
    <div className="py-20 h-screen flex justify-center items-start">
      <div className="invoice flex flex-col items-center p-5 rounded-xl">
        <h1 className="text-2xl mb-5">Login to your account</h1>
        <form
          className="flex flex-col gap-3 w-72"
          onSubmit={handleSubmit(signUp)}
        >
          <input
            type="text"
            placeholder="username"
            className="bg-gray-700 rounded-xl p-3"
            {...register("username")}
          />
          <input
            type="email"
            placeholder="email"
            className="bg-gray-700 rounded-xl p-3"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="password"
            className="bg-gray-700 rounded-xl p-3"
            {...register("password")}
          />
          <input
            type="password"
            placeholder="confirm password"
            className="bg-gray-700 rounded-xl p-3"
            {...register("passwordConfirm")}
          />

          <button type="submit" className="btn p-3 rounded-xl">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
