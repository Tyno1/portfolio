import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LeftSection from "./LeftSection";
import ParticleBackground from "./ParticleBackground";

const PortfolioLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation from landing page
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Wait for the page to fully render, then scroll
        setTimeout(() => {
          // Different offset for mobile vs desktop
          const isMobile = window.innerWidth < 1024; // lg breakpoint
          const yOffset = isMobile ? -120 : -80; // Mobile has taller navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full h-full relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      <LeftSection />
      <main className="h-[100vh] pt-16 lg:pt-0 lg:ml-[20%] lg:pl-8 relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default PortfolioLayout;
