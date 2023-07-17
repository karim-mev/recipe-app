import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { pb } from "@/lib/pocketbase";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="relative flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
