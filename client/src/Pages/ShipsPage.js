import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import MapPrint from "../Components/MapPrint";

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

const polygonOptions = {
  rectangle: false,
  circle: false,
  circlemarker: false,
  marker: false,
  polyline: false,
};

const ShipsPage = () => {
  // States
  const [zoomLevel, setZoomLevel] = useState(5);
  const [center, setCenter] = useState([-8.164333000000001, 151.232697]);
  const [ships, setShips] = useState([]);

  const _created = async (e) => {
    const inputData = e.layer.editing.latlngs;
    const response = await axios.post(
      "http://localhost:5000/api/v1/ships/polygon",
      inputData
    );
    setShips(response.data.aisData);
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/v1/ships");
    const response = await res.json();
    setShips(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapRef = useRef();
  const printControlRef = useRef();

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

        <MapPrint
          position="topleft"
          sizeModes={["Current", "A4Portrait", "A4Landscape"]}
          hideControlContainer={false}
          title="Print"
        />
        <MapPrint
          position="topleft"
          sizeModes={["Current", "A4Portrait", "A4Landscape"]}
          hideControlContainer={false}
          title="Export as PNG"
          exportOnly
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
              <p>Latitude: {ship.Latitude}</p>
              <p>Longitude: {ship.Longitude}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ShipsPage;
