import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { pb } from "@/lib/pocketbase";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe",
  description: "dope recipe app",
};

export const revalidate = 0; 

function isLog() {
  return pb.authStore.isValid;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="relative flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
