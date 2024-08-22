import React from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-2 w-[100vw] h-[100vh]">
      <RightSection />
    </div>
  );
};

export default Home;
