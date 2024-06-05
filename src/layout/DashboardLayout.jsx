import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/navbar/Navbar";


const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] min-h-screen">
      <div className="col-span-2 row-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-10 pl-4">
        <Navbar />
      </div>
      <div className="col-span-10 pl-4 ">
        <Outlet />
      </div>
      <div className="col-span-10">
       
      </div>
    </div>
  );
};

export default DashboardLayout;
