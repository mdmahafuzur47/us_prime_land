/* eslint-disable @typescript-eslint/no-explicit-any */
// ListingForm.tsx
import React, { Dispatch, SetStateAction } from "react";
import { Form, Input, Checkbox, Button, Switch } from "antd";

const { Item } = Form;

interface PropertyOption {
  label: string;
  value: string;
}

const PropertyInfoFrom = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<number>>;
}) => {
  const [form] = Form.useForm();
  const hasHouse = Form.useWatch("hasHouse", form);
  console.log(hasHouse);

  const propertyTypes = Form.useWatch("propertyTypes", form);
  const waterTypes = Form.useWatch("waterTypes", form);

  console.log(propertyTypes, waterTypes);

  const propertyOptions: PropertyOption[] = [
    { label: "Commercial Property", value: "commercialProperty" },
    { label: "Farms", value: "farms" },
    { label: "Horse Property", value: "horseProperty" },
    { label: "Hunting Land", value: "huntingLand" },
    { label: "Ranches", value: "ranches" },
    { label: "Recreational Property", value: "recreationalProperty" },
    { label: "Residential Property", value: "residentialProperty" },
    { label: "Timberland", value: "timberland" },
    { label: "Undeveloped Land", value: "undevelopedLand" },
  ];

  const waterOptions: PropertyOption[] = [
    { label: "Beachfront Property", value: "beachfrontProperty" },
    { label: "Lakefront Property", value: "lakefrontProperty" },
    { label: "Riverfront Property", value: "riverfrontProperty" },
  ];

  const onFinish = (values: any) => {
    setActive(1);
    console.log("Form Values:", values);
  };

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        {/* Listing Type */}
        <Item
          name="listingType"
          label="Listing Type"
          rules={[{ required: true, message: "Please select a listing type!" }]}
        >
          <Checkbox.Group>
            <Checkbox value="forSale">For Sale</Checkbox>
            <Checkbox value="auctions">Auctions</Checkbox>
          </Checkbox.Group>
        </Item>

        {/* Property Type */}
        <Item
          name="propertyTypes"
          label="Property Type"
          rules={[
            {
              required: true,
              message: "Please select at least one property type!",
            },
          ]}
        >
          <Checkbox.Group options={propertyOptions} />
        </Item>

        {/* Water Type */}
        <Item name="waterTypes" label="Water Type">
          <Checkbox.Group options={waterOptions} />
        </Item>

        {/* LandAndFarm Details */}
        <div className="mb-4">
          <h3 className="font-bold">LandAndFarm Details</h3>
          <Item name="firstType" label="1st Type">
            <Input placeholder="Enter 1st type" />
          </Item>
          <Item name="secondType" label="2nd Type">
            <Input placeholder="Enter 2nd type" />
          </Item>
          <Item name="thirdType" label="3rd Type">
            <Input placeholder="Enter 3rd type" />
          </Item>
        </div>

        {/* Has a House */}
        <Item name="hasHouse" label="Has a House?" valuePropName="checked">
          <Switch />
        </Item>

        {/* Conditional House Information */}
        {hasHouse && (
          <>
            <Item
              name="houseSize"
              label="Size in sq. ft."
              rules={[{ required: true, message: "Please enter house size!" }]}
            >
              <Input placeholder="Enter house size in sq. ft." />
            </Item>
            <Item
              name="bedrooms"
              label="Bedrooms"
              rules={[
                { required: true, message: "Please enter number of bedrooms!" },
              ]}
            >
              <Input placeholder="Enter number of bedrooms" />
            </Item>
            <Item
              name="bathrooms"
              label="Bathrooms"
              rules={[
                {
                  required: true,
                  message: "Please enter number of bathrooms!",
                },
              ]}
            >
              <Input placeholder="Enter number of bathrooms" />
            </Item>
            <Item
              name="parking"
              label="Parking"
              rules={[
                { required: true, message: "Please enter parking details!" },
              ]}
            >
              <Input placeholder="Enter parking details" />
            </Item>
            <Item
              name="builtYear"
              label="Built Year"
              rules={[
                { required: true, message: "Please enter the built year!" },
              ]}
            >
              <Input placeholder="Enter built year" />
            </Item>
          </>
        )}

        {/* Price and Acreage */}
        <Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter the price!" }]}
        >
          <Input placeholder="Enter price" />
        </Item>

        <Item name="acres" label="Acres">
          <Input placeholder="Enter acres" />
        </Item>

        <Item name="sizeInSqFt" label="Size in Sq. Ft.">
          <Input placeholder="Enter size in sq. ft." />
        </Item>

        <Item
          name="referenceName"
          label="Reference Name (For Internal Use Only)"
        >
          <Input placeholder="Enter reference name" />
        </Item>

        <Item name="mlsId" label="MLS ID">
          <Input placeholder="Enter MLS ID" />
        </Item>

        <Item name="listingTitle" label="Listing Title">
          <Input placeholder="Enter listing title" />
        </Item>

        <Item name="status" label="Status">
          <Input placeholder="Enter status" />
        </Item>

        {/* External Listing Link */}
        <Item
          name="externalListingLink"
          label="External Listing Link"
          rules={[
            {
              required: true,
              message: "Please provide the external listing link!",
            },
          ]}
        >
          <Input placeholder="Enter external listing link" />
        </Item>

        {/* Submit Button */}
        <Item className="flex justify-end">
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="bg-blue-500 text-white"
          >
            Submit
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default PropertyInfoFrom;
