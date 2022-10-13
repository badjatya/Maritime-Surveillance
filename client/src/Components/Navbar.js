import React, { useState } from "react";
import ship from "../img/ship.png";

const Navbar = () => {
  // States
  const [shipId, setShipId] = useState("");
  const [valid, setValid] = useState(false);

  // Fetch Function
  const fetchData = async (id) => {
    const res = await fetch(`http://localhost:5000/api/v1/ships/search/${id}`);
    const response = await res.json();
    const data = response.data;
    if (data.length > 1) {
      const lat = data[0].Latitude;
      const lon = data[0].Longitude;
      // setCenter([lat, lon]);
      // setShips(data);
    }
  };

  // Change Function
  const onChangeInput = (e) => {
    if (valid) {
      setValid(false);
    }
    setShipId(e.target.value);
  };

  // Submit Function
  const submit = () => {
    if (!shipId) {
      setValid(true);
    }
    fetchData(shipId);
    setShipId("");
  };

  return (
    <div className="nav">
      <div className="logo">
        <img src={ship} alt="Logo" />
        <p>Ship</p>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter Ship ID"
          style={valid ? { border: "3px solid #FF0000" } : {}}
          value={shipId}
          onChange={onChangeInput}
        />
        <button onClick={submit}>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
