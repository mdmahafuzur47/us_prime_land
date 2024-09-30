import Footer from "@/components/shared/footer/Footer";
import { MenuIcon } from "@/components/shared/icons/Icons";
import Navbar from "@/components/shared/navbar/Navbar";
import AdminSide from "@/components/ui/AdminSide";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const path = useRouter().pathname;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <main className="overflow-hidden">
      {path.startsWith("/admin") ? (
        <div className="flex h-screen">
          {/* Sidebar toggle button for mobile */}
          <div className="">
            <button
              className="md:hidden fixed py-[6px] top-4 left-4 z-50 text-3xl"
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </button>

            {/* Admin sidebar */}
            <AdminSide isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>

          {/* Admin main content */}
          <div className="flex-1 bg-gray-100 px-5 py-2 overflow-y-auto">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-3">
                {/* <MenuIcon className="text-3xl" /> */}
                <h1 className="text-2xl ml-10 md:ml-0 font-medium uppercase">
                  Admin Dashboard
                </h1>
              </div>
              <Image
                src="/img.png"
                alt="Admin Image"
                width={60}
                height={60}
                className="size-14 rounded-full"
              />
            </div>
            <hr className="my-3" />
            {children}
          </div>
        </div>
      ) : (
        <div>
          {path === "/login" ? (
            <div>{children}</div>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </div>
      )}
    </main>
  );
}
