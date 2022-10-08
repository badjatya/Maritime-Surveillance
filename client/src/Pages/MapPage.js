import React, { useState } from "react";

// Leaflet
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const [center, setCenter] = useState([13.084622, 80.248357]);
  const [zoomLevel, setZoomLevel] = useState(5);
  return (
    <div>
      <MapContainer center={center} zoom={zoomLevel}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapPage;
