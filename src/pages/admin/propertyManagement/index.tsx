// "use client";
// import dynamic from "next/dynamic";
import AddProperty from "@/components/pages/admin/property/AddProperty";
import { Button } from "antd";
import React, { useState } from "react";

// Dynamically import the Button component from Ant Design
// const Button = dynamic(() => import("antd").then((mod) => mod.Button));

export default function PropertyManagement() {
  const [add, setAdd] = useState(false);

  const toggleAdd = () => {
    setAdd((prev) => !prev);
  };

  return (
    <div>
      <div>
        <Button className="font-medium" onClick={toggleAdd}>
          Add
        </Button>
      </div>

      <div className="mt-5">
        {/* Add property form */}
        {add && <AddProperty />}
      </div>
    </div>
  );
}
