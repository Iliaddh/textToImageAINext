"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { useAppContext } from "@/context/page";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CircleUserRound } from 'lucide-react';
import {
  SignOutButton,
  SignedOut,
  SignedIn,
  SignInButton,
} from "@clerk/nextjs"; 


function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter(); 

  const {
    pageRequest,
    setPageRequest,
  } = useAppContext();
   
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <Logo />
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <a>About us</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <SignedOut>
          <div className="bg-gray-400 p-2 rounded-md text-white">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
              <CircleUserRound size={26}/>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/dashboard">
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
