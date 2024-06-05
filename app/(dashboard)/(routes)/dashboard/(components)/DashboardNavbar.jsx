"use client";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SideBar from "./SideBar";

const DashboardNavbar = ({apiLimitCount}) => {
  return (
    <div className="navbar bg-base-100">
      <SideBar apiLimitCount ={ apiLimitCount}/>
      <div className="flex-1">
        <a className="text-lg font-bold ml-4">ArtifyMe</a>
      </div>
      <Link href="/">
        <button className="mx-12 btn btn-square btn-ghost">Home</button>
      </Link>
      <div className="flex-none">
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardNavbar;
