/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Table, Button, Select, Spin } from "antd";
import React from "react";
import AddPropertyType from "./AddPropertyType";
import { useGetPropertyTypeQuery, usePropertyTypeStatusChangeMutation } from "@/redux/api/propertyApi/propertyApi";
import { Loading } from "@/components/shared/Loading";

const { Option } = Select;

interface PropertyTypeData {
  id: string;
  property_type: string;
  type: string;
  status: string;
}

export default function PropertyType() {
  const { data, isLoading } = useGetPropertyTypeQuery(undefined);
  const [statusChangeMutation, { isLoading: StatusLoading }] = usePropertyTypeStatusChangeMutation();

  if (isLoading) {
    return <Loading />;
  }

  const propertyData: PropertyTypeData[] = data?.data || [];

  // Update handler
  const handleUpdate = (record: PropertyTypeData) => {
    console.log("Update property type:", record);
    
  };

  // Delete handler
  const handleDelete = (id: string) => {
    console.log("Delete property type with id:", id);
   
  };

  // Handle status change
  const handleStatusChange = async (value: string, record: PropertyTypeData) => {
    const data = {
      id: record.id,
      status: value,
    };

    try {
      const res = await statusChangeMutation(data);
      if ("error" in res) {
        console.error("Failed to update property type:", res.error);
        return;
      }
      console.log("Updated property type status successfully:", res.data);
    } catch (err) {
      console.error("Failed to update property type status:", err);
    }
  };

  return (
    <div className="container mx-auto">
      <Card
        title={<span className="text-xl font-semibold">Property Type</span>}
        extra={<AddPropertyType />}
        className="shadow-lg overflow-y-auto"
      >
        <Table
          dataSource={propertyData}
          columns={[
            {
              title: "No.",
              key: "index",
              render: (_: any, __: any, index: number) => index + 1 + ".",
            },
            {
              key: "property_type",
              title: "Property Type",
              dataIndex: "property_type",
            },
            {
              key: "type",
              title: "Type",
              dataIndex: "type",
            },
            {
              key: "status",
              title: "Status",
              dataIndex: "status",
              render: (status: string, record: PropertyTypeData) => (
                <div className="flex items-center">
                  {StatusLoading && (
                    <Spin size="small" className="mr-2" />
                  )}
                  <Select
                    defaultValue={status}
                    className={`${
                      status === "block" ? "text-red-500" : "text-green-500"
                    } px-2 py-1 rounded font-semibold`}
                    onChange={(value) => handleStatusChange(value, record)}
                    disabled={StatusLoading}
                  >
                    <Option value="active">Active</Option>
                    <Option value="block">Block</Option>
                  </Select>
                </div>
              ),
            },
            {
              key: "action",
              title: "Action",
              render: (_: any, record: PropertyTypeData) => (
                <div className="flex space-x-2">
                  <Button
                    type="primary"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1"
                    onClick={() => handleUpdate(record)}
                  >
                    Update
                  </Button>
                  <Button
                    type="primary"
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1"
                    onClick={() => handleDelete(record.id)}
                  >
                    Delete
                  </Button>
                </div>
              ),
            },
          ]}
          rowKey="id"
          className="w-full"
        />
      </Card>
    </div>
  );
}
