import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustedBySection from "../components/home/TrustedBySection";
import WhyAnalysysSection from "../components/home/WhyAnalysysSection";
import FeaturesSection from "../components/home/FeaturesSection";
import WorkflowSection from "../components/home/WorkflowSection";
import IndustriesSection from "../components/home/IndustriesSection";
import AnalyticsSection from "../components/home/AnalyticsSection";
import DeploymentSection from "../components/home/DeploymentSection";
import TestimonialsSection from "../components/home/TestimonialSection";
import DemoSection from "../components/home/DemoSection";
import FAQSection from "../components/home/FAQSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <WhyAnalysysSection />
      <FeaturesSection />
      <WorkflowSection />
      <IndustriesSection />
      <AnalyticsSection />
      <DeploymentSection />
      <TestimonialsSection />
      <DemoSection />
      <FAQSection />
    </div>
  );
};

export default Home;
