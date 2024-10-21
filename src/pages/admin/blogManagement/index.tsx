import AddBlog from "@/components/pages/admin/BlogManagement/addBlog/AddBlog";
import ListOfBlogs from "@/components/pages/admin/BlogManagement/ListOfBlogs/ListOfBlogs";
import { Button } from "antd";
import React, { useState } from "react";

export default function BlogManagement() {
  const [openAdd, setOpenAdd] = useState(false);
  const toggle = () => {
    setOpenAdd((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl uppercase font-medium text-gray-700">All Blog List</h1>
        <Button size="large" onClick={toggle} type="primary">
          {openAdd ? "Back to List" : "Add Blog"}
        </Button>
      </div>

      {/* changing state pages  */}
      <div className="mt-8">{openAdd ? <AddBlog /> : <ListOfBlogs />}</div>
    </div>
  );
}
