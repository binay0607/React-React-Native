import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
