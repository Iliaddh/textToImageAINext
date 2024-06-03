"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useState } from "react";
import { useAppContext } from "@/context/page";
import Link from "next/link";

const SideBar = () => {
  const { pageRequest, setPageRequest } = useAppContext();

  return (
    <div className="flex-none">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-0">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li onClick={() => setPageRequest("/generate")}>
              <p>Image Generator</p>
            </li>
            <li onClick={() => setPageRequest("/dashboard")}>
              <p>Profile</p>
            </li>
            <li>
              <p onClick={() => setPageRequest("/billing")}>Billing</p>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
