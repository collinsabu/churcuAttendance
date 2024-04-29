import { Inter } from "next/font/google";
import "./globals.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "church Attendance",
  description: "created by Collins Abu",
};

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Conditionally render Nav component based on user existence */}
        {data?.session?.user && <Nav user={data.session.user} />}
        {children}
      </body>
    </html>
  );
}
