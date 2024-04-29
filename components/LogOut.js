"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
      router.refresh()
    }
  };

  return (
    <button
      className="bg-transparent border-2 border-black h-10 w-[100%] flex justify-center items-center font-bold text-md hover:bg-bg-green hover:text-white mt-9"
      onClick={handleLogout}
    >
      SignOut
    </button>
  );
}
