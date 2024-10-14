/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdatePropertyTypeMutation } from "@/redux/api/propertyApi/propertyApi";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

interface UpdatePropertyTypeProps {
  data: {
    property_type: string;
    type: string;
    id: string;
  } | null;
  visible: boolean;
  onClose: () => void;
}

const { Option } = Select;

export default function UpdatePropertyType({
  data,
  visible,
  onClose,
}: UpdatePropertyTypeProps) {
  const [mutation, {isLoading}] = useUpdatePropertyTypeMutation();
  const [form] = Form.useForm();

  useEffect(() => {
    if (data && visible) {
      form.setFieldsValue({
        property_type: data.property_type,
        type: data.type,
      });
    }
  }, [data, visible, form]);

  const onFinish = async (values: any) => {
    console.log("Form values:", values);

    try {
      const res: any = await mutation({
        property_type: values.property_type,
        type: values.type,
        id: data?.id,
      });

      if ("error" in res) {
        console.error("Failed to update property type:", res.error);
        return;
      }
      console.log("Updated property type successfully:", res.data);

      form.resetFields();
      onClose();
    } catch (err) {
      console.error("Error updating property type:", err);
    }
  };

  return (
    <Modal
      open={visible}
      footer={null}
      title="Update Property Type"
      onCancel={onClose}
    >
      <Form form={form} onFinish={onFinish} layout="vertical" className="py-5">
        <Form.Item
          label="Property Type"
          name="property_type"
          rules={[{ required: true, message: "Please enter property type!" }]}
        >
          <Input placeholder="Enter Property Type" />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please select a type!" }]}
        >
          <Select>
            <Option value="property">Property</Option>
            <Option value="water type">Water Type</Option>
          </Select>
        </Form.Item>
        <div className="flex justify-end gap-2 items-center">
          <Button loading={isLoading} type="primary" htmlType="submit">
            Update
          </Button>
          <Button danger type="dashed" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
