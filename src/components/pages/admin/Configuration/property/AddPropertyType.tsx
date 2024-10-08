/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreatePropertyTypeMutation } from "@/redux/api/propertyApi/propertyApi";
import { Alert, Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";

export default function AddPropertyType() {
  const [mutation] = useCreatePropertyTypeMutation();
  const [Open, setOpen] = useState(false);
  const onFinish = async (values: any) => {
    console.log("Form values:", values);

    try {
      const res = await mutation(values);
      if ("error" in res) {
        console.error(res.error);
        return;
      }
      console.log(res);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Button onClick={() => setOpen((pre) => !pre)}>
        Add New Property Type
      </Button>
      <Modal
        open={Open}
        footer={[]}
        title="Add New Property Type"
        onCancel={() => setOpen((pre) => !pre)}
      >
        <div className="mt-2 py-5">
          <Alert type="error" showIcon closable message="SomeThing is Wrong" />
        </div>
        <Form
          onFinish={onFinish}
          initialValues={{
            type: "property",
          }}
          layout="vertical"
        >
          <Form.Item label="Property Type" name="property_type" required>
            <Input placeholder="Enter Property Type" />
          </Form.Item>
          <Form.Item label="Type" name="type" required>
            <Select
              options={[
                {
                  label: "Property",
                  value: "property",
                },
                {
                  label: "Water Type",
                  value: "water type",
                },
              ]}
            />
          </Form.Item>
          <div className="flex justify-end gap-2 items-center">
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button danger type="dashed" onClick={() => setOpen((pre) => !pre)}>
              Cancel
            </Button>
            <br />
          </div>
        </Form>
      </Modal>
    </div>
  );
}
