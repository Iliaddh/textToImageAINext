import React from "react";
import { auth } from "@clerk/nextjs/server";
import DashboardNavbar from "../(dashboard)/(routes)/dashboard/(components)/DashboardNavbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { redirect } from "next/navigation";
import Footer from "../(components)/Footer";

const DashboardLayout = ({ children }) => {
  const {userId} = auth()
  if (!userId) redirect("/sign-in");
  const apiLimitCount = getApiLimitCount(userId);
  return (
    <div className="h-full relative">
        <DashboardNavbar apiLimitCount={apiLimitCount}  /> 
        {children}
        <Footer/>
    </div>
  );
};

export default DashboardLayout;
