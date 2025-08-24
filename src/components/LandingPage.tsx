import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { navigationItems, socialLinksData } from "../data";
import type { NavigationItem } from "../data/navigation";
import Button from "./Button";
import Logo from "./Logo";
import ParticleBackground from "./ParticleBackground";

function LandingPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    navigate(`/portfolio#${sectionId}`);
  };

  const renderNavigationButton = (item: NavigationItem) => {
    if (item.isExternal) {
      return (
        <Link
          key={item.id}
          to={item.path}
          className="bg-[#00ff88] text-black hover:bg-[#00cc6a] active:bg-[#00ff88] active:outline active:outline-2 active:outline-[#00ff88] transition-all duration-200 flex items-center justify-center py-2 px-4 text-sm font-medium rounded-lg hover:scale-105 hover:shadow-lg"
        >
          {item.title}
        </Link>
      );
    }

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => scrollToSection(item.hash || item.id)}
        className="bg-transparent text-white hover:text-[#00ff88] hover:border-2 hover:border-[#00ff88] active:text-[#00ff88] active:border-2 active:border-[#00ff88] active:outline active:outline-2 active:outline-[#00ff88] transition-all duration-200 flex items-center justify-center py-2 px-4 text-sm font-medium rounded-lg hover:scale-105 hover:shadow-lg"
      >
        {item.title}
      </button>
    );
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FaGithub':
        return FaGithub;
      case 'FaTwitter':
        return FaTwitter;
      case 'FaLinkedin':
        return FaLinkedin;
      case 'MdAlternateEmail':
        return MdAlternateEmail;
      default:
        return FaGithub;
    }
  };

  return (
    <div className="w-screen h-screen bg-[#0f0f0f] flex flex-col relative overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute top-6 left-6 z-20">
        <div className="block lg:hidden">
          <Logo variant="squared" />
        </div>
        <div className="hidden lg:block">
          <Logo variant="full" />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-8 sm:py-12 gap-8 lg:gap-12 relative z-10">
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="profile-pic w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#00ff88]/30 shadow-[0_0_20px_rgba(0,255,136,0.3)]" />
            <img 
              src="/src/assets/IMG_1013.jpg" 
              alt="Anthony Ukutegbe" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
        
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <motion.div
            className="w-full"
            initial={{ 
              opacity: 0, 
              y: 100,
              x: 0,
              scale: 1.2
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left">
              Hi, I'm <span className="text-[#00ff88]">Anthony</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-[#a0a0a0] mb-8 leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            A passionate Front-End Developer with a love for creating beautiful, functional, and accessible web experiences. 
            I specialize in React, Next.js, and modern web technologies, turning ideas into reality through clean code and innovative design.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          >
            {navigationItems.map(renderNavigationButton)}
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4 flex-wrap justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            {socialLinksData.map((link) => {
              const IconComponent = getIconComponent(link.icon);
              return (
                <Button
                  key={link.id}
                  logo={<IconComponent color="#a0a0a0" />}
                  name={link.name}
                  link={link.url}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
