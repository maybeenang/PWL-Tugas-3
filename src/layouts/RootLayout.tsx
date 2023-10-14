import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="h-screen flex font-playfair">
      <div className="p-5 pb-0 w-screen max-w-2xl   md:mt-32 mx-auto divide-y-2 sm:flex sm:divide-y-0 sm:divide-x-2">
        <Navbar />
        <main className="pt-5 sm:p-0 sm:pl-5 flex flex-col justify-between h-screen ">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
