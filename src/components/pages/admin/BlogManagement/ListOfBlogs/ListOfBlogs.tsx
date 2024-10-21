import React, { useState } from "react";
import { Table, Select, Button, Space } from "antd";
import type { ColumnsType } from "antd/lib/table";

const { Option } = Select;

interface Blog {
  key: string;
  no: number;
  name: string;
  date: string;
  status: string;
}

const ListOfBlogs: React.FC = () => {
  // Blog data
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      key: "1",
      no: 1,
      name: "Blog 1",
      date: "2024-10-01",
      status: "active",
    },
    {
      key: "2",
      no: 2,
      name: "Blog 2",
      date: "2024-10-02",
      status: "deactive",
    },
    {
      key: "3",
      no: 3,
      name: "Blog 3",
      date: "2024-10-02",
      status: "deactive",
    },
    {
      key: "4",
      no: 4,
      name: "Blog 4",
      date: "2024-10-02",
      status: "deactive",
    },
  ]);

  // Handle status change
  const handleStatusChange = (value: string, key: string) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.key === key ? { ...blog, status: value } : blog
    );
    setBlogs(updatedBlogs);
  };

  // Columns for the table
  const columns: ColumnsType<Blog> = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "Blog Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Blog Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Blog Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status: string, record: Blog) => (
        <Select
          defaultValue={status}
          onChange={(value) => handleStatusChange(value, record.key)}
          className="w-32"
        >
          <Option value="active">Active</Option>
          <Option value="deactive">Deactive</Option>
        </Select>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="bg-blue-500 text-white"
            onClick={() => handleUpdate(record.key)}
          >
            Update
          </Button>
          <Button
            className="bg-red-500 text-white"
            onClick={() => handleDelete(record.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // Handle update action
  const handleUpdate = (key: string) => {
    alert(`Update Blog with key: ${key}`);
  };

  // Handle delete action
  const handleDelete = (key: string) => {
    setBlogs(blogs.filter((blog) => blog.key !== key));
  };

  return (
    <div className="">
      <Table
        dataSource={blogs}
        columns={columns}
        // pagination={false}
        className="table-auto w-full"
      />
    </div>
  );
};

export default ListOfBlogs;
