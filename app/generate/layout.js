import React from "react";
import Navbar from "../(components)/Navbar";
import { auth } from "@clerk/nextjs/server";
import SideBar from "../(dashboard)/(routes)/dashboard/(components)/SideBar";
import DashboardNavbar from "../(dashboard)/(routes)/dashboard/(components)/DashboardNavbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { redirect } from "next/navigation";
import Footer from "../(components)/Footer";

const DashboardLayout = async ({ children }) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const apiLimitCount = await getApiLimitCount(userId);
  return (
    <div className="h-full relative">
      <DashboardNavbar apiLimitCount={apiLimitCount} />
      {children}
      <Footer/>
    </div>
  );
};

export default DashboardLayout;
