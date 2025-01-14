import React from "react";
import { Outlet } from "react-router-dom";
import FooterWithSocialLinks from "../components/share/footer/Footer";
import NavbarSimple from "../components/share/header/Navbar";

const RootLayout = () => {
  return (
    <div>
      <NavbarSimple />
      <Outlet />
      <FooterWithSocialLinks />
    </div>
  );
};

export default RootLayout;
