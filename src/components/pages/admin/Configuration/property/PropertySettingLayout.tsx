import { Tabs } from "antd";
import React from "react";
import PropertyType from "./PropertyType";
import County from "./County";

export default function PropertySettingLayout() {
  return (
    <div>
      <Tabs
        items={[
          {
            label: "Property Type",
            key: "propertyType",
            children: <PropertyType />,
          },
          {
            label: "County",
            key: "County",
            children: <County />,
          },
        ]}
        tabPosition="left"
      />
    </div>
  );
}
