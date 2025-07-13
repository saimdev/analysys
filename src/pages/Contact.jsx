import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import OfficeLocations from "../components/contact/OfficeLocations";
import SupportSection from "../components/contact/SupportSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactFormSection />
      <OfficeLocations />
      <SupportSection />
    </div>
  );
};

export default Contact;
