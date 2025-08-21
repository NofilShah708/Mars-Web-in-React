import React from "react";
import MissionDataSection from "../Components/MissionDataSection";
import SmallAbout from "../Components/SmallAbout";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MissionData = () => {
  return (
    <div>
      <Navbar />
      <MissionDataSection />
      <SmallAbout />
      <Footer />
    </div>
  );
};

export default MissionData;
