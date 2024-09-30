import React from "react";

export default function Steeper({ active = 0 }) {
  console.log(active);

  const count = [1, 2, 3, 4];
  return (
    <div>
      <div className="flex justify-between my-7 px-10">
        {count.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center font-medium text-xl`}
          >
            <div className={`size-8 flex justify-center items-center  font-semibold text-xl  rounded-full ${active === index ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {index + 1}
            </div>
            <p className={`uppercase ${active === index ? "text-blue-500": ""}`}>Step {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
