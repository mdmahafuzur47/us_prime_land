/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Button, Form, Input, Skeleton } from "antd";
import React, { useState } from "react";

import usCountiesGeoJSON from "@/datas/counties.geojson.json";
import CountySelectorMap from "@/components/ui/CountySelectorMap";
import { SearchIcon } from "@/components/shared/icons/Icons";

export default function AddCounty() {
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();
  const countyName = Form.useWatch("county_name", form);
  const [location, setLocation] = useState<any>([]);
  const [MapReLoad, setMapReLoad] = useState(false);

  const geoData = {
    type: "FeatureCollection",
    name: "cb_2017_us_county_20m",
    crs: {
      type: "name",
      properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
    },
    features: location,
  };

  const handleFilter = () => {
    setMapReLoad(true)
    const filteredData = usCountiesGeoJSON.features.filter((feature) =>
        feature.properties.NAME.toLowerCase().includes(countyName.toLowerCase())
);
setLocation(filteredData);
setTimeout(()=>{

    setMapReLoad(false)
},500)

  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  console.log(location)
  console.log(geoData)

  return (
    <div>
      <Button onClick={toggleModal}>Add New County</Button>

      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-5">
            <h2 className="text-lg font-semibold mb-4">Add New County</h2>
            <div className="mt-2 py-5">
              <Alert
                type="error"
                showIcon
                closable
                message="Something is Wrong"
              />
            </div>
            <Form
              form={form}
              initialValues={{
                type: "property",
              }}
              layout="vertical"
            >
              <Form.Item label="County Name" name="county_name" required>
                <Input
                  placeholder="Enter County Name"
                  addonAfter={
                    <div onClick={handleFilter} className="cursor-pointer">
                      <SearchIcon />
                    </div>
                  }
                />
              </Form.Item>
              <div>

                {
                    MapReLoad ? <Skeleton
                    
                    /> : <CountySelectorMap mapData={geoData} />
                }
                
              </div>
              <div className="flex justify-end gap-2 items-center mt-4">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button danger type="dashed" onClick={toggleModal}>
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}
