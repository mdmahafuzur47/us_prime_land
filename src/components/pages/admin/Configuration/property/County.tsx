import { Card, Table } from "antd";
import React from "react";
import AddCounty from "./AddCounty";

export default function County() {
  return (
    <div>
      {/* <Card title="County" extra={<AddCounty />}>
        <Table
          columns={[
            {
              key: "name",
              title: "Name",
              dataIndex: "name",
            },
            {
              key: "status",
              title: "Status",
              dataIndex: "status",
            },
            {
              key: "TotalProperty",
              title: "Total Property",
              dataIndex: "total_property",
            },
            {
              key: "Location",
              title: "Location",
              dataIndex: "location",
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
          ]}
        />
      </Card> */}
    </div>
  );
}
