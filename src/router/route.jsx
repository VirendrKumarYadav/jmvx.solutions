import * as React from "react";

import {
  createBrowserRouter,
  Link,
} from "react-router-dom";


import Home from "../nav/Home"
import About from "../nav/About"


const router = createBrowserRouter([
  
  {
    path: "/about",
    element: (
        <About/>
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