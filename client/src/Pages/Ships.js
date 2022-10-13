import React, { useState, useRef, useEffect } from "react";

// Leaflet
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import leaflet from "leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

// Marker Function
const markerIcon = new leaflet.Icon({
  iconUrl: require("../img/ship.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

// Polygon create function and options
const _created = (e) => console.log(e);
const polygonOptions = {
  rectangle: false,
  circle: false,
  circlemarker: false,
  marker: false,
  polyline: false,
};

const Ships = () => {
  // States
  // const [center, setCenter] = useState([13.084622, 80.248357]);
  const [zoomLevel, setZoomLevel] = useState(7);
  const [center, setCenter] = useState([-38.233562, 178.554214]);

  const [ships, setShips] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/v1/ships");
    const response = await res.json();
    setShips(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapRef = useRef();

  return (
    <div>
      <MapContainer center={center} zoom={zoomLevel} ref={mapRef}>
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_created}
            draw={polygonOptions}
          />
        </FeatureGroup>
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

export default Ships;
