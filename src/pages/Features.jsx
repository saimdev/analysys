import React from "react";
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesOverview from "../components/features/FeaturesOverview";
import FeatureDetails from "../components/features/FeatureDetails";
import FeatureComparison from "../components/features/FeatureComparison";
import TechnicalSpecs from "../components/features/TechnicalSpecs";
import IntegrationSection from "../components/features/IntegrationSection";
import FeaturesCTA from "../components/features/FeaturesCTA";

const Features = () => {
  return (
    <div className="min-h-screen">
      <FeaturesHero />
      <FeaturesOverview />
      <FeatureDetails />
      <TechnicalSpecs />
      <FeatureComparison />
      <IntegrationSection />
      <FeaturesCTA />
    </div>
  );
};

export default Features;
