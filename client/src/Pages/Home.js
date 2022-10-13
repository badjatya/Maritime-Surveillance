import React from "react";
import { useNavigate } from "react-router-dom";

// Import Image
import Hero from "../img/yacht_hero.svg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="left">
        <h1>Welcome to Marine Ship</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
          dolor, sit amet consectetur adipisicing.
        </p>
        <button onClick={() => navigate("/ships")}>Ships</button>
      </div>
      <div className="right">
        <img src={Hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Home;
