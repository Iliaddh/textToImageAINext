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
    // <div className="flex-none">
    //   <div className="drawer z-10">
    //     <input
    //       id="my-drawer"
    //       type="checkbox"
    //       className="drawer-toggle"
    //       checked={open}
    //       readOnly
    //     />
    //     <div className="drawer-content p-0" onClick={() => setOpen(!open)}>
    //       {/* Page content here */}
    //       {/* <label htmlFor="my-drawer" className="btn drawer-button">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           className="inline-block w-5 h-5 stroke-current "
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           ></path>
    //         </svg>
    //       </label> */}
    //     </div>
    //     {/*  */}
    //     <div className={`drawer-side ${open ? "block" : "hidden"} flex`}>
    //       <label
    //         htmlFor="my-drawer"
    //         aria-label="close sidebar"
    //         className="drawer-overlay"
    //         // onClick={() => setOpen(false)}
    //       ></label>
    //  <ul className="menu p-4 w-80 min-h-full  text-base-content bg-slate-700">
    //   <Link href="/generate">
    //     <li
    //       onClick={() => {
    //         setOpen(false);
    //       }}
    //     >
    //       <p className="text-white">Image Generator</p>
    //     </li>
    //   </Link>
    //   <Link href="/dashboard">
    //     <li
    //       onClick={() => {
    //         setOpen(false);
    //       }}
    //     >
    //       <p className="text-white">Gallery</p>
    //     </li>
    //   </Link>
    //   <Link href="/billing">
    //     <li
    //       className="text-white"
    //       onClick={() => {
    //         setOpen(false);
    //       }}
    //     >
    //       <p>Billing</p>
    //     </li>
    //   </Link>
    //   <li className="text-white">
    //     <SignOutButton />
    //   </li>
    //   <FreeCounter apiLimitCount={apiLimitCount} />
    // </ul>
    //       <div
    //         className="drawer-content flex p-0"
    //         onClick={() => setOpen(!open)}
    //       >
    //         {/* Page content here */}
    //         <label htmlFor="my-drawer" className=" drawer-button cursor-pointer">
    //         <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="drawer z-10 w-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-4">
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
          <Link href="/generate">
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <p>Image Generator</p>
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <p>Gallery</p>
            </li>
          </Link>
          <Link href="/billing">
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <p>Billing</p>
            </li>
          </Link>
          <li>
            <SignOutButton />
          </li>
          <FreeCounter apiLimitCount={apiLimitCount} />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
