import { Card, Table } from "antd";
import React from "react";
import AddPropertyType from "./AddPropertyType";

export default function PropertyType() {
  return (
    <div>
      <Card
        title="Property Type"
        extra={<AddPropertyType />}
      >
        <Table columns={[
            {
                key: "Property Type",
                title: "Property Type",
                dataIndex: "property_type",
            },
            {
                key: "Type",
                title: "Type",
                dataIndex: "type",
            },
            {
                key: "Status",
                title: "Status",
                dataIndex: "status",
            },
            {
                key: "Action",
                title: "Action",
                // render: (_, record:any) => (
                //     <div>
                //         <Button>Update</Button>
                //         <Button>Delete</Button>
                //     </div>
                // )
            },
        ]} />
      </Card>
    </div>
  );
}
