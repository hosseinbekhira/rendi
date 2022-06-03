import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CateOne from "./components/CateOne";
import CateTwo from "./components/CateTwo";
import CateThree from "./components/CateThree";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catego1" element={<CateOne />} />
        <Route path="catego2" element={<CateTwo />} />
        <Route path="catego3" element={<CateThree />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
