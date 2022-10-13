import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Pages
import Ships from "./Pages/Ships";
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
        <Route path="/ships" element={<Ships />} />
      </Routes>
    </div>
  );
};

export default App;
