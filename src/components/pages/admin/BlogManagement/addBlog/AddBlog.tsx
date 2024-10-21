/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Form, Input, Button, Select, DatePicker, Upload, message } from "antd";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const { Option } = Select;

interface BlogFormValues {
  name: string;
  date: string;
  status: string;
  description: string;
}

const AddBlog: React.FC = () => {
  const [form] = Form.useForm();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileList, setFileList] = useState<any[]>([]); // To handle the uploaded files

  // Handle form submission
  const onFinish = (values: BlogFormValues) => {
    const blogData = { ...values, content };
    console.log("Submitted values:", blogData);
  };

  // Handle reset form
  const resetForm = () => {
    form.resetFields();
    setContent("");
    setImageUrl(null);
    setFileList([]);
  };

  // Handle before upload (validating file type and size)
  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG files!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  // Handle image upload and preview
  const handleImageChange = (info: any) => {
    setFileList(info.fileList); // Update the file list

    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <Form
        form={form}
        layout="vertical"
        name="blog_form"
        onFinish={onFinish}
        initialValues={{
          status: "active",
          date: moment(),
        }}
      >
        {/* Blog Name */}
        <Form.Item
          label="Blog Name"
          name="name"
          rules={[{ required: true, message: "Please enter the blog name!" }]}
        >
          <Input placeholder="Enter blog name" className="rounded-md" />
        </Form.Item>

        {/* Blog Image Upload */}
        <Form.Item
          label="Blog Image"
          name="image"
          rules={[{ required: true, message: "Please upload a blog image!" }]}
        >
          <Upload
            name="blogImage"
            listType="picture"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleImageChange}
            fileList={fileList} // Use fileList instead of value
            className="w-full"
          >
            <Button icon={<UploadOutlined />}>
              Click to Upload Blog Image
            </Button>
          </Upload>
          {imageUrl && (
            <Image
              width={1400}
              height={600}
              src={imageUrl}
              alt="Blog Preview"
              className="mt-3 w-96 h-56 rounded-md object-cover"
            />
          )}
        </Form.Item>

        {/* Blog Date */}
        <Form.Item
          label="Blog Date"
          name="date"
          rules={[{ required: true, message: "Please select the blog date!" }]}
        >
          <DatePicker
            className="w-full rounded-md"
            placeholder="Select blog date"
          />
        </Form.Item>

        {/* Blog Status */}
        <Form.Item
          label="Blog Status"
          name="status"
          rules={[{ required: true, message: "Please select blog status!" }]}
        >
          <Select className="w-full rounded-md">
            <Option value="active">Active</Option>
            <Option value="deactive">Deactive</Option>
          </Select>
        </Form.Item>

        {/* Blog Description */}

        <div>
          <JoditEditor
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
          />
        </div>

        {/* Action Buttons */}
        <Form.Item>
          <div className="flex mt-7 justify-between">
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Add Blog
            </Button>
            <Button
              type="default"
              htmlType="button"
              onClick={resetForm}
              className="bg-gray-500 text-white"
            >
              Reset
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddBlog;
