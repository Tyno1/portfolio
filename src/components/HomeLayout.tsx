import React, { useState } from "react";
import LeftSection from "./LeftSection";
import { Outlet, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import IconButton from "./IconButton";

const HomeLayout = () => {
  return (
    <div
      className="lg:grid lg:grid-cols-2 w-[100vw] h-[100%] lg:overflow-hidden"
      style={{ gridTemplateColumns: "1fr 1.2fr" }}
    >
      <LeftSection />
      <main className="h-[100vh] lg:overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
