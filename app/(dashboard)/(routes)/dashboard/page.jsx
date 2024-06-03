"use client";
import React from "react";
import Navbar from "./(components)/DashboardNavbar";
import { useAppContext } from "@/context/page";
import CreatePost from "@/app/generate/page";
import Billing from "./(components)/Billing";

const Dashboard = () => {
  const {
    pageRequest,
    setPageRequest,
  } = useAppContext();

  console.log(pageRequest)
  
  return (
    <div>
      <Navbar />
      {pageRequest === "/generate" && (
        <CreatePost/>
      ) }
      {
        pageRequest === "/billing" && (
          <Billing/>
        ) 
      }

{
        pageRequest === "/dashboard" && (
          <p>Hello</p>
        ) 
      }

      

    </div>
  );
};

export default Dashboard;
