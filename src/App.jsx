
import React from "react";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import TrustedLogos from "./Components/TrustedLogos.jsx";
import Services from "./Components/Services.jsx";
import OdooFeature from "./Components/OdooFeature.jsx";
import AIFeature from "./Components/AIFeature.jsx";
import EngineeringFeature from "./Components/EngineeringFeature.jsx";
import Industries from "./Components/Industries.jsx";
import FounderQuote from "./Components/FounderQuote.jsx";
import FAQ from "./Components/FAQ.jsx";
import CTASection from "./Components/CTASection.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-[72px]">
        <Hero />
        <TrustedLogos />
        <Services />
        <OdooFeature />
        <AIFeature />
        <EngineeringFeature />
        <Industries />
        <FounderQuote />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

export default App;
