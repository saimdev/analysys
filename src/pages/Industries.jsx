import React from "react";
import IndustriesHero from "../components/industries/IndustriesHero";
import IndustryDetails from "../components/industries/IndustryDetails";
import CaseStudies from "../components/industries/CaseStudies";
import IndustryComparison from "../components/industries/IndustryComparison";
import IndustriesCTA from "../components/industries/IndustriesCTA";

const Industries = () => {
  return (
    <div className="min-h-screen">
      <IndustriesHero />
      <IndustryDetails />
      <CaseStudies />
      <IndustryComparison />
      <IndustriesCTA />
    </div>
  );
};

export default Industries;
