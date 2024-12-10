import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div >
      <Navbar />
      <div className="w-3/4 mx-auto my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
