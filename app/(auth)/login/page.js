"use client";
import { useState } from "react";

import React from "react";
import Image from "next/image";
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/");
      router.refresh()
    }
  };
  [];

  return (
    <main className="bg-[url('./images/bg.jpg')] bg-cover bg-center h-screen  flex items-center justify-center">
      <div className="bg-bg-green h-[79%] sm:w-[25%] w-[85%] rounded-[40px] px-9 pt-10 ">
        <div className="overflow-hidden h-[200px] rounded-[20px]">
          <Image
            src="/images/bg3.jpg"
            alt="christian background image"
            width={500}
            height={400}
          />
        </div>
        <AuthForm handleSubmit={handleSubmit} />

        {error && <div className="error">{error}</div>}
      </div>
    </main>
  );
}
