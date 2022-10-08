import React, { useState, useEffect } from "react";
import MapPage from "./Pages/MapPage";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
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
  return (
    <div>
      <Navbar
        center={center}
        setCenter={setCenter}
        ships={ships}
        setShips={setShips}
      />
      <MapPage center={center} ships={ships} />
    </div>
  );
};

export default App;
