/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateCountyMutation } from "@/redux/api/propertyApi/propertyApi";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

interface UpdateCountyTypeProps {
  data: {
    county_name: string;
    id: string;
  } | null;
  visible: boolean;
  onClose: () => void;
}

const { Option } = Select;

export default function UpdateCounty({
  data,
  visible,
  onClose,
}: UpdateCountyTypeProps) {
  const [mutation, { isLoading }] = useUpdateCountyMutation();
  const [form] = Form.useForm();

  useEffect(() => {
    if (data && visible) {
      form.setFieldsValue({
        county_name: data.county_name,
      });
    }
  }, [data, visible, form]);

  const onFinish = async (values: any) => {
    console.log("Form values:", values);

    try {
      const res: any = await mutation({
        county_name: values.county_name,
        id: data?.id,
      });

      if ("error" in res) {
        console.error("Failed to update County type:", res.error);
        return;
      }
      console.log("Updated County type successfully:", res.data);

      form.resetFields();
      onClose();
    } catch (err) {
      console.error("Error updating County type:", err);
    }
  };

  return (
    <Modal
      open={visible}
      footer={null}
      title="Update County Type"
      onCancel={onClose}
    >
      <Form form={form} onFinish={onFinish} layout="vertical" className="py-5">
        <Form.Item
          label="County Name"
          name="county_name"
          rules={[{ required: true, message: "Please enter County type!" }]}
        >
          <Input placeholder="Enter County Type" />
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
