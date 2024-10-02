/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CountySelectorMap = ({ mapData }: any) => {

  const [selectedCounty, setSelectedCounty] = useState(null);
  

  const onEachCounty = (county, layer) => {
    const countyName = county.properties.NAME;
    console.log(county);
    // Assuming 'NAME' is the property for the county name
    layer.bindPopup(countyName);

    // Highlight the county on hover
    layer.on({
      click: () => handleCountyClick(county),
      mouseover: (event) => highlightFeature(event),
      mouseout: (event) => resetHighlight(event),
    });
  };

  const handleCountyClick = (county) => {
    setSelectedCounty(county?.properties.NAME); // Handle selection
    alert(`Selected County: ${county?.properties.NAME}`);
  };

  const highlightFeature = (event) => {
    const layer = event.target;
    layer.setStyle({
      weight: 3,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
  };

  const resetHighlight = (event) => {
    const layer = event.target;
    layer.setStyle({
      weight: 1,
      color: "#3388ff",
      fillOpacity: 0.2,
    });
  };

  return (
    <div>
      <MapContainer
        center={[31.43402899915992, -89.451616]} // Center of the US
        zoom={4}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render GeoJSON data for US counties */}
        <GeoJSON data={mapData} onEachFeature={onEachCounty} />
      </MapContainer>

      {/* Display selected county name */}
      {selectedCounty && (
        <div>
          <h2>Selected County: {selectedCounty}</h2>
        </div>
      )}
    </div>
  );
};

export default CountySelectorMap;
