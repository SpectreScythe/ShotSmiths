import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import TopScroll from "../components/TopScroll";

const AboutUs = () => {
  return (
    <div className="about-us">
      <AboutSection />
      <div className="sep-line"></div>
      <ServicesSection />
      <div className="sep-line"></div>
      <FaqSection />
      <TopScroll />
    </div>
  );
};

export default AboutUs;
