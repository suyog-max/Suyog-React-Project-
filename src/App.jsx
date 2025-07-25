import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Project from "./Components/Project/Project";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Products/Products";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
