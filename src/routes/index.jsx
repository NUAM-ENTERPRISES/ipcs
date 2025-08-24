import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Servicepage from "../pages/Servicepage";
import ProductSection from "../pages/ProductSection";
import Service from "../pages/Service";
import Detailedservice from "../pages/Detailedservice";

// ✅ New imports
import About from "../pages/About";
import Why from "../pages/Why";
import Product from "../pages/Product";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "why", element: <Why /> },
      { path: "product", element: <Product /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "service", element: <Service /> },
      { path: "services", element: <Servicepage /> }, // <- See All Services
      { path: "service/:id", element: <Detailedservice /> },
      { path: "product/:id", element: <ProductSection /> },
    ],
  },
]);
