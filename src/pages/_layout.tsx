import Footer from "@/components/shared/footer/Footer";
import { MenuIcon } from "@/components/shared/icons/Icons";
import Navbar from "@/components/shared/navbar/Navbar";
import AdminSide from "@/components/ui/AdminSide";
import { useAuthCheckQuery } from "@/redux/api/authApi/authApi";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { data, isLoading } = useAuthCheckQuery(undefined);
  const router = useRouter();
  const path = router.pathname;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">loading...</div> {/* Add your loading spinner here */}
      </div>
    );
  }
  const user = data?.user;
  console.log(user);

  if (path.startsWith("/admin") && !user) {
    router?.push("/login");
  }

  return (
    <main className="overflow-hidden">
      {path.startsWith("/admin") ? (
        user ? (
          <div className="flex h-screen">
            <div>
              <button
                className="md:hidden fixed py-[6px] top-4 left-4 z-50 text-3xl"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
              >
                <MenuIcon />
              </button>
              <AdminSide isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>

            <div className="flex-1 bg-gray-100 px-5 py-2 overflow-y-auto">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl ml-10 md:ml-0 font-medium uppercase">
                  Admin Dashboard
                </h1>
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
          <div className="flex justify-center items-center h-screen">
            <div className="loader">loading...</div>
          </div>
        )
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
