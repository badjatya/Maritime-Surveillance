import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ship from "../img/ship.png";

const Navbar = () => {
  // States
  const [shipId, setShipId] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

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
    setShipId("");
    navigate(`/ships/${shipId}`);
  };

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src={ship} alt="Logo" />
        <p>Ship</p>
      </Link>
      <div className="inputContainer">
        <Link to="/">Home</Link>
        <Link to="/ships">Ships</Link>
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
