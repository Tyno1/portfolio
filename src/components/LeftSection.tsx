import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import IconButton from "./IconButton";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function LeftSection() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onNavPress = (route: string) => {
    setIsOpen(!isOpen);
    window.location.href = route;
  };
  return (
    <div className="w-full lg:w-[80%] h-[100vh] flex flex-col items-center lg:items-start px-8 lg:px-0 lg:pl-20 py-6 lg:py-20 justify-between">
      <div className="mobile lg:hidden w-full">
        <IconButton
          icon={
            isOpen ? (
              <IoMdClose size={24} color="#fff" />
            ) : (
              <GiHamburgerMenu size={24} color="#fff" />
            )
          }
          variant="outlined"
          onClick={() => toggleMenu()}
          className="ml-auto"
        />
        <div
          className={`w-[100vw] h-[100vh] bg-white absolute top-20 z-10 ease-in duration-300 ${
            isOpen
              ? "top-0 visible ease-in duration-300"
              : " top-[-100vh] ease-in duration-300"
          }`}
        >
          <ul className="flex flex-col text-sm text-black w-full">
            <li className="bg-white hover:bg-myGray active:bg-primary">
              <button
                className="p-8 w-full mx-auto active:text-white"
                onClick={() => onNavPress("/")}
              >
                Home
              </button>
            </li>
            <li className="bg-white hover:bg-myGray active:bg-primary">
              <button
                className="p-8 w-full mx-auto active:text-white"
                onClick={() => onNavPress("/#work")}
              >
                Work Experience
              </button>
            </li>
            <li className="bg-white hover:bg-myGray active:bg-primary">
              <button
                className="p-8 w-full mx-auto active:text-white"
                onClick={() => onNavPress("/#projects")}
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="description mb-6 flex flex-col gap-6 items-center lg:items-left">
        <h1 className="text-white font-bold text-4xl">Anthony Ukutegbe</h1>
        <p className="text-[#777778] font-light text-sm leading-loose text-justify">
          Dedicated <span className="text-white">Front-End Developer</span> with
          experience in creating{" "}
          <span className="text-white">
            responsive and user-friendly web and mobile applications{" "}
          </span>
          across various industries. Proficient in{" "}
          <span className="text-white">
            React, Typescript, JavaScript, and modern front-end frameworks.
          </span>{" "}
          Strong background in{" "}
          <span className="text-white">
            graphic design and user interface design
          </span>
          , balancing functional and aesthetic design.
          <span className="text-white"> Effective collaborator</span> with
          cross-functional teams to deliver{" "}
          <span className="text-white">secure and scalable platforms.</span>
        </p>
      </div>

      <nav className="w-full hidden lg:flex">
        <ul className="text-white w-full flex flex-col">
          <li className="py-4 flex items-center">
            <span>00</span>
            <NavHashLink
              smooth
              className="w-full h-full flex items-center"
              to="#work"
            >
              <span className="mx-4 w-[4rem] h-[1px] "></span>
              WORK EXPERIENCE
            </NavHashLink>
          </li>
          <li className="py-4 flex items-center">
            <span>01</span>
            <NavHashLink
              smooth
              to="#projects"
              className="w-full h-full flex items-center"
            >
              <span className="mx-4 w-[4rem] h-[1px] "></span>
              PROJECTS
            </NavHashLink>
          </li>
          <li className="w-full py-4 flex items-center">
            <span>02</span>
            <Link
              className="w-full h-full flex items-center"
              target="_blank"
              to="https://www.linkedin.com/in/anthony-ukutegbe-350b87253/"
            >
              <span className="mx-4 w-[4rem] h-[1px] "></span>
              LINKEDIN
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer flex items-center gap-4">
        <div className="profile-pic w-10 h-10 bg-white rounded-full"></div>
        <Button
          logo={<FaGithub color="#777778" />}
          name="GitHub"
          link="https://github.com/Tyno1"
        />
        <Button
          logo={<FaTwitter color="777778" />}
          name="Twitter"
          link="https://x.com/Kvng_Tyno"
        />
        <Button
          logo={<MdAlternateEmail color="777778" />}
          name="Email"
          link="mailto:anthonyukutegbe1@gmail.com"
        />
      </div>
      <Link
        className="text-xs text-[#777778]"
        target="_blank"
        to="https://www.sarahdayan.dev/"
      >
        Inspired By <span className="text-white">Sarah Dayan</span>
      </Link>
    </div>
  );
}

export default LeftSection;
