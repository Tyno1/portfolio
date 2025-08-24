import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { navigationItems, socialLinksData } from "../data";
import type { NavigationItem } from "../data/navigation";
import Button from "./Button";
import IconButton from "./IconButton";
import Logo from "./Logo";

function LeftSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const onNavPress = () => setIsOpen(!isOpen);

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

  const getScrollOffset = () => {
    const isMobile = window.innerWidth < 1024;
    return isMobile ? -120 : -80;
  };

  const renderNavigationItem = (item: NavigationItem, isMobile = true) => {
    const yOffset = getScrollOffset();
    
    if (item.isExternal) {
      return (
        <Link
          className={`${isMobile ? 'p-8 w-full text-center' : ''} hover:text-[#00ff88] transition-colors duration-200`}
          to={item.path}
          onClick={isMobile ? onNavPress : undefined}
        >
          {item.title}
        </Link>
      );
    }

    return (
      <NavHashLink
        smooth
        className={`${isMobile ? 'p-8 w-full text-center' : ''} hover:text-[#00ff88] transition-colors duration-200`}
        to={item.path}
        onClick={isMobile ? onNavPress : undefined}
        scroll={(el) => {
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      >
        {item.title}
      </NavHashLink>
    );
  };

  const renderSocialLinks = () => (
    <div className="flex items-center gap-4 flex-wrap justify-center">
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
    </div>
  );

  return (
    <>
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed top-0 left-0 z-50 bg-[#0f0f0f] px-8 py-6 w-full flex justify-between items-center">
        <Logo variant="squared" />
        <IconButton
          icon={
            isOpen ? (
              <IoMdClose size={24} color="#fff" />
            ) : (
              <GiHamburgerMenu size={24} color="#fff" />
            )
          }
          label={isOpen ? "Close Menu" : "Open Menu"}
          onClick={toggleMenu}
        />
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`w-full h-[100vh] bg-[#0f0f0f] fixed top-0 left-0 z-40 transition-all duration-700 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-lg text-black w-full pt-24">
          {navigationItems.map((item) => (
            <li key={item.id} className="text-white hover:bg-[#1b1b1d] active:bg-[#2a2a2c] flex">
              {renderNavigationItem(item, true)}
            </li>
          ))}
          <li className="flex flex-col items-center gap-6 mt-20">
            <p className="text-[#a0a0a0] text-2xl">Connect With Me</p>
            <div className="footer flex flex-wrap items-center gap-4 w-full justify-center">
              {renderSocialLinks()}
            </div>
          </li>
        </ul>
      </div>

      {/* Desktop LeftSection */}
      <div className="hidden lg:flex w-full lg:w-[20%] h-[100vh] flex-col items-center lg:items-start px-8 lg:px-0 lg:pl-10 xl:pl-20 py-6 lg:py-20 lg:justify-between lg:fixed lg:left-0 lg:top-0 lg:z-40">
        <div className="hidden lg:flex w-full justify-center lg:justify-start mb-8 animate-fade-in-up">
          <Logo variant="squared" />
        </div>
        
        <nav className="hidden lg:flex w-full flex-col items-center lg:items-start mt-20 lg:mt-0 animate-fade-in-up">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-[#00ff88] text-2xl font-semibold mb-2">Explore My World</h2>
          </div>
          
          <ul className="text-white w-full flex flex-col items-center lg:items-start">
            {navigationItems.map((item, index) => (
              <li key={item.id} className="py-4 flex items-center w-full justify-center lg:justify-start hover:scale-105 transition-transform duration-200">
                <span className="text-[#a0a0a0] text-sm mr-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {renderNavigationItem(item, false)}
              </li>
            ))}
          </ul>
        </nav>

        <div className="social-links flex flex-col items-center gap-6 mt-auto lg:mt-8 animate-fade-in-up animation-delay-200">
          <p className="text-[#a0a0a0] text-sm">Connect With Me</p>
          {renderSocialLinks()}
        </div>

        <div className="footer flex flex-col items-center gap-4 mt-4 lg:mt-0">
          <Link
            className="text-xs text-[#a0a0a0] hover:text-white transition-colors duration-200"
            target="_blank"
            to="https://www.sarahdayan.dev/"
          >
            Inspired By <span className="text-white">Sarah Dayan</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
