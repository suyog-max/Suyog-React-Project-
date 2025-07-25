import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Products";

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
