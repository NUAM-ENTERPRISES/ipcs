import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sticky from "../pages/Sticky"; // your sticky button component

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
       <Sticky /> {/* Sticky Call Now button */}
      <Footer />
 
    </div>
  );
};

export default Layout;
