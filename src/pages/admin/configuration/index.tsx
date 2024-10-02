import PropertySettingLayout from "@/components/pages/admin/Configuration/property/PropertySettingLayout";
import { URL } from "@/util/URL";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";

export default function Configuration() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    // Get the initial hash value when the component mounts
    setHash(window.location.hash);

    // Optionally, you can add an event listener to handle hash changes
    const onHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  console.log(hash.substring(1));

  return (
    <div>
      <Tabs
        activeKey={hash.substring(1)}
        onChange={URL.setHashInUrl}
        items={[
          {
            label: "Basic Settings",
            key: "basic",
            children: <p>hi</p>,
          },
          {
            label: "Property Settings",
            key: "property",
            children: <PropertySettingLayout />,
          },
          {
            label: "Admin Settings",
            key: "admin",
            children: <p>hi</p>,
          },
        ]}
      />
    </div>
  );
}
