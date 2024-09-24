import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const path = useRouter().pathname;
  console.log(path);
  return (
    <main className="overflow-hidden">
      {path.startsWith("/dashboard") ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </main>
  );
}
