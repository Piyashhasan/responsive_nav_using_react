import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Contact from "../components/Contact/Contact";
import NotFound from "../reusable/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
