import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <section className=" w-full h-[80vh] overflow-hidden px-1 md:px-5 mt-10">
      <div className="flex w-full h-full">
        <div className="flex-1 flex justify-center items-center bg-secondary">
          <div className="max-w-[500px] mx-auto">
            <h1 className="text-5xl font-semibold mb-5">404</h1>
            <h4 className="text-2xl font-medium">
              This page seems to have slipped
              <br /> through a time portal
            </h4>
            <p className="text-sm mt-2 mb-5">
              we appologize for any distruction to the space-time continuum.
              Feel free tko journey back to our homepage
            </p>

            <Link href={"/"}>
              <button className="bg-myBlue px-6 py-2 text-white font-semibold rounded-md mt-4">
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex-1 relative overflow-hidden"
          style={{
            backgroundImage: "url('/img.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full bg-[#0000008e]"></div>
        </div>
      </div>
    </section>
  );
}
