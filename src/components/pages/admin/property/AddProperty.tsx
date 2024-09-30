import React, { useState } from "react";
import PropertyInfoFrom from "../../properties/propertiesFrom/PropertyInfoFrom";
import PropertyAddress from "../../properties/propertiesFrom/PropertyAddress";
import Steeper from "@/components/ui/Steeper";

export default function AddProperty() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Steeper active={active} />
      {active == 0 && <PropertyInfoFrom setActive={setActive} />}
      {active == 1 && <PropertyAddress setActive={setActive} />}
    </div>
  );
}
