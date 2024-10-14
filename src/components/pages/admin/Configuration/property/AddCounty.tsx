/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateCountyMutation } from "@/redux/api/propertyApi/propertyApi";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";

export default function AddCounty() {
  const [form] = Form.useForm();
  const [createMutation, { isLoading }] = useCreateCountyMutation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onFinish = async (values: any) => {
    console.log("Form values:", values);
    try{
      const res = await createMutation(values);
      if("error" in res){
        console.error(res.error);
        return;
      }
      console.log("Created County:", res.data);
      form.resetFields();
      setIsOpen(false);
    }catch(err){
      console.error(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button onClick={toggleModal}>Add New County</Button>
      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-5">
            <h2 className="text-lg font-semibold mb-4">Add New County</h2>
            <Form
            form={form}
              layout="vertical"
              name="add-county"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="County Name"
                name="county_name"
                rules={[
                  { required: true, message: "Please input the county name!" },
                ]}
              >
                <Input placeholder="Enter county name" />
              </Form.Item>

              <Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">
                  Add County
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
