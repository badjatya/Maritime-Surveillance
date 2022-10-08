import React, { useState, useEffect } from "react";

// Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker Function
const markerIcon = new leaflet.Icon({
  iconUrl: require("../img/ship.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const MapPage = () => {
  // States
  // const [center, setCenter] = useState([13.084622, 80.248357]);
  const [center, setCenter] = useState([-38.233562, 178.554214]);
  const [ships, setShips] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(9);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/v1/ships");
    const response = await res.json();
    setShips(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <MapContainer center={center} zoom={zoomLevel}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {ships.map((ship) => (
          <Marker
            position={[ship.Latitude, ship.Longitude]}
            icon={markerIcon}
            key={ship._id}
          >
            <Popup>
              <p>Ship ID: {ship.Ship_ID}</p>
              <p>Ship Speed: {ship.Speed}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
