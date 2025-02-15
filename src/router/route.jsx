import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../nav/Home";
import About from "../nav/About";
import Services from "../nav/Services";
import Contacts from "../nav/Contacts";
import Footer from "../componants/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all pages inside Layout
    children: [
      {
        path: "/", element:
          <>
            <Home />
           
          </>

      },
      {
        path: "/about", element: <>
          <About />
          <Footer />
        </>
      },
      {
        path: "/services", element:
          <>
            <Services />
            <Footer />
          </>
      },
      {
        path: "/contact", element:
          <>
            <Contacts />
            <Footer />
          </>

      },
    ],
  },
]);

export default router;
