/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "antd";
import { Dispatch, SetStateAction } from "react";

const PropertyAddress = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<number>>;
}) => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <Form
        onFinish={onFinish}
        layout="vertical"
        className="grid grid-cols-2 gap-x-2"
      >
        {/* Property Address Fields */}
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true }]}
          className="col-span-2"
        >
          <Input
            placeholder="Enter location"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true }]}
          className="col-span-2"
        >
          <Input
            placeholder="Enter address"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item name="city" label="City" rules={[{ required: true }]}>
          <Input
            placeholder="Enter city"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item name="state" label="State" rules={[{ required: true }]}>
          <Input
            placeholder="Enter state"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item name="zip" label="Zip" rules={[{ required: true }]}>
          <Input
            placeholder="Enter zip code"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item name="country" label="Country" rules={[{ required: true }]}>
          <Input
            placeholder="Enter country"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="latitude"
          label="Latitude"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Enter latitude"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="longitude"
          label="Longitude"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Enter longitude"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>

        {/* Property Description Fields */}
        <Form.Item
          name="propertyDescription"
          label="Property Description"
          rules={[{ required: true }]}
          className="col-span-2"
        >
          <Input.TextArea
            rows={4}
            placeholder="Enter property description"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="drivingDirections"
          label="Driving Directions"
          rules={[{ required: true }]}
          className="col-span-2"
        >
          <Input.TextArea
            rows={4}
            placeholder="Enter driving directions"
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>

        <Form.Item className="col-span-2 flex justify-end">
          <div className="flex gap-3">
            <Button
              type="primary"
              size="large"
              onClick={() => setActive(0)}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Previous
            </Button>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PropertyAddress;
