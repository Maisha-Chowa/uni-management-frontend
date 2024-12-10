import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
]);

export default router;
