import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Pages
import ShipsPage from "./Pages/ShipsPage";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

// Importing Components
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ships" element={<ShipsPage />} />
        <Route path="/ships/:id" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
