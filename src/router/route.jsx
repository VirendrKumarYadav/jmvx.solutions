import * as React from "react";

import {
  createBrowserRouter,
  Link,
} from "react-router-dom";


import Home from "../nav/Home"
import About from "../nav/About"
import Services from '../nav/Services'
import Contacts from '../nav/Contacts'

const router = createBrowserRouter([
  
  {
    path: "/about",
    element: (
        <About/>
    ),
  },
  {
    path: "/contact",
    element: (
        <Contacts/>
    ),
  },
  {
    path: "/services",
    element: (
        <Services/>
    ),
  },
  {
    path: "/",
    element: (
        <Home/>
    ),
  },

  
]);

export default router;