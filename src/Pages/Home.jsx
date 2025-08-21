import React from "react";
import HeroPage from "../Components/HeroPage";
import LogoSection from "../Components/LogoSection";
import KeyPoints from "../Components/KeyPoints";
import MissionDataSection from "../Components/MissionDataSection";
import SmallAbout from "../Components/SmallAbout";
import TechnicalRole from "../Components/TechnicalRole";
import Testominal from "../Components/Testominal";
import Footer from "../Components/Footer";
import "./styles/Home.css";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <HeroPage />
      <LogoSection />
      <KeyPoints />
      <MissionDataSection />
      <SmallAbout />
      <TechnicalRole />
      <Testominal />
      <Footer />
    </div>
  );
};

export default Home;
