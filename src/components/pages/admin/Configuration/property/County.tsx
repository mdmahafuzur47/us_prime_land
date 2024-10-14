/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Select, Spin, Table } from "antd";
import React, { useState } from "react";
import AddCounty from "./AddCounty";
import {
  useCountyStatusChangeMutation,
  useDeleteCountyMutation,
  useGetCountiesQuery,
} from "@/redux/api/propertyApi/propertyApi";
import UpdateCounty from "./UpdateCounty";

interface CountyData {
  key?: string;
  id: string;
  county_name: string;
  status: string;
}

const { Option } = Select;

export default function County() {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState<any>(null);
  const { data, isLoading } = useGetCountiesQuery(undefined);
  const [statusChangeMutation, { isLoading: StatusLoading }] =
    useCountyStatusChangeMutation();
  const [deletePropertyType, { isLoading: DeletePropertyType }] =
    useDeleteCountyMutation();
  if (isLoading) return <div>Loading...</div>;

  const toggle = () => {
    setOpen((pre) => !pre);
  };

  console.log(data);

  const countyData: CountyData[] = data?.data || [];

  // Update handler
  const handleUpdate = (record: CountyData) => {
    setUpdateData(record);
    toggle();
  };

  // Handle status change
  const handleStatusChange = async (value: string, record: CountyData) => {
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

  // Delete handler
  const handleDelete = async (id: string) => {
    try {
      const res = await deletePropertyType({
        id,
      });
      if ("error" in res) {
        console.error("Failed to delete property type:", res.error);
        return;
      }
      console.log("Deleted property type successfully:", res.data);
    } catch (err) {
      console.error("Failed to delete property type:", err);
    }
  };

  return (
    <div>
      <Card title="County" extra={<AddCounty />}>
        <Table
          dataSource={countyData}
          columns={[
            {
              title: "No.",
              key: "index",
              render: (_: any, __: any, index: number) => index + 1 + ".",
            },
            {
              key: "county_name",
              title: "County Name",
              dataIndex: "county_name",
            },
            {
              key: "status",
              title: "Status",
              dataIndex: "status",
              render: (status: string, record: CountyData) => (
                <div className="flex items-center">
                  {StatusLoading && <Spin size="small" className="mr-2" />}
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
              render: (_: any, record: CountyData) => (
                <div className="flex space-x-2">
                  <Button
                    type="primary"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1"
                    onClick={() => handleUpdate(record)}
                  >
                    Update
                  </Button>
                  <Button
                    loading={DeletePropertyType}
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
        />
      </Card>
      <UpdateCounty data={updateData} visible={open} onClose={toggle} />
    </div>
  );
}
