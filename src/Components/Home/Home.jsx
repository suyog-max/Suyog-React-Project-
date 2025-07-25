import React from "react";

import "./Home.css";
import profileImg from "../../assets/profileImg.jpg"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Suyog Bhandari</h1>
          <p>
            I'm a 19-year-old student currently exploring the world of web development.
          </p>
          <button className="home-btn">Download CV</button>
        </div>
        <div className="home-img">
          <img src={profileImg} alt="Suyog" />
        </div>
      </section>
    </div>
  );
};

export default Home;