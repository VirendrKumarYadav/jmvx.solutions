import React from "react";
import Header from "../componants/Header"; 
import { Outlet } from "react-router-dom";
import Footer from "../componants/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      
      <main>
        <Outlet /> 
      </main>
   
    </>
  );
};

export default Layout;
