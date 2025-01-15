import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterWithSocialLinks from "../components/share/footer/Footer";
import NavbarSimple from "../components/share/header/Navbar";

const RootLayout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NavbarSimple />
      <Outlet />
      <FooterWithSocialLinks />
    </div>
  );
};

export default RootLayout;
