
import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import DashboardNavbar from "./(routes)/dashboard/(components)/DashboardNavbar"
import { getApiLimitCount } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const {userId} = auth();
  if (!userId) redirect("/sign-in");
  const apiLimitCount = await getApiLimitCount(userId);
  return (
    <div className="h-full">
      <DashboardNavbar apiLimitCount ={apiLimitCount} />
      {children}
      <Footer/>
    </div>
  );
};

export default DashboardLayout;
