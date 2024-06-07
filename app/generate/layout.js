import React from "react";
import Navbar from "../(components)/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full relative">
        <Navbar/>
        {children}
    </div>
  );
};

export default DashboardLayout;
