"use client"
import React from "react";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { useAppContext } from "@/context/page";
import { useRouter } from "next/navigation";

function Navbar() { 
  const router = useRouter();
  const { 
    logIn, 
    signUp, 
    setLogIn,
    setSignUp,
  } = useAppContext();

  const logOutHandler = () => {
    setLogIn(false);
    setSignUp(false);
    router.push("/");
    
  }
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

          <Link href="/">
            <Logo/>
          </Link>
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
          {logIn || signUp ? <button className="btn btn-success  text-white " onClick={logOutHandler} >Log out</button>: <Link href="/login">
            <button className="btn btn-success  text-white w-16" >LOG IN</button>
          </Link>}
        </div>
      </div>
  );
}

export default Navbar;
