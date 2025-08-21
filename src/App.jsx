import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import MissionData from "./Pages/MissionData";
import TechnicalRole from "./Pages/TechnicalRolePage";
import Contact from "./Pages/ContactPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mission-data" element={<MissionData />} />
        <Route path="technical-role" element={<TechnicalRole />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
