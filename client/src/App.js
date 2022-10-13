import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Pages
import MapPage from "./Pages/MapPage";
import Home from "./Pages/Home";

// Importing Components
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
};

export default App;
