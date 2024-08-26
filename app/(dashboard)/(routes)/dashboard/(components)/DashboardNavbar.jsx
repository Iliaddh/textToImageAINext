"use client";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SideBar from "./SideBar";

const DashboardNavbar = ({apiLimitCount}) => {
  return (
    <div className="navbar bg-base-100">
      <SideBar  apiLimitCount ={ apiLimitCount}/>
      <div className="flex-1">
        <a className="mobile:text-sm tablet:text-lg laptop:text-xl font-bold mobile:ml-4">ArtifyMe</a>
      </div>
      <Link href="/">
        <button className=" mobile:mx-0 tablet:mx-8 rounded-md tablet:p-1 mobile:mr-4  mobile:text-sm">Home</button>
      </Link>
      <div className="flex-none">
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardNavbar;
