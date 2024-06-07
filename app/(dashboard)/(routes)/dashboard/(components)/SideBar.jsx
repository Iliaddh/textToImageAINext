"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useState } from "react";
import { useAppContext } from "@/context/page";
import Link from "next/link";
import FreeCounter from "./FreeCounter";

const SideBar = ({ apiLimitCount }) => {
  const { pageRequest, setPageRequest } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-none">
      <div className="drawer z-10">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={open}
          readOnly
        />
        <div className="drawer-content p-0" onClick={() => setOpen(!open)}>
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
        {/*  */}

        <div className={`drawer-side ${open ? "block" : "hidden"}`}>
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            // onClick={() => setOpen(false)}
          ></label>
          <ul className="menu p-4 w-80 min-h-full  text-base-content bg-slate-700">
            {/* Sidebar content here */}
            <li
              onClick={() => {
                setPageRequest("/generate");
                setOpen(false);
              }}
            >
              <p className="text-white">Image Generator</p>
            </li>
            <li
              onClick={() => {
                setPageRequest("/dashboard");
                setOpen(false);
              }}
            >
              <p className="text-white">Gallery</p>
            </li>
            <li>
              <p
                className="text-white"
                onClick={() => {
                  setPageRequest("/billing");
                  setOpen(false);
                }}
              >
                Billing
              </p>
            </li>
            <li className="text-white">
              <SignOutButton />
            </li>
            <FreeCounter apiLimitCount={apiLimitCount} />
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
