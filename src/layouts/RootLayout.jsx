import React from "react";
import { Outlet } from "react-router-dom";
import StickyNavbar from "../components/share/header/Navbar";

const RootLayout = () => {
  return (
    <div>
      <StickyNavbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
