import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "./components/SideBar";
import TopNavBar from "./components/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonga - Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavBar />
        <div className='flex items-start'>
          <div className="sticky top-0 flex-start ">
            <SideBar />
          </div>
          <div className='flex-end w-full'>
            {children}
          </div>
        </div> 
      </body>
    </html>
  );
}
