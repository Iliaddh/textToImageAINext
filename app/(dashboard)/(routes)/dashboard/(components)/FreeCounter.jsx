"use client";
import { MAX_FREE_COUNTS } from "@/constants/constants";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

const FreeCounter = ({ apiLimitCount }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // This effect runs whenever apiLimitCount changes
    // Add the code you want to run on apiLimitCount change here
  }, [apiLimitCount]);

  if (!mounted) return null;

  return (
    <div className="px-3 bg-gray-600 flex justify-center  text-center rounded-md">
      <div className="text-center text-sm text-white mb-4 space-y-2">
        <p className="mt-2">
          {apiLimitCount}/{MAX_FREE_COUNTS} Free Generations
        </p>
        <progress
          className="progress progress-accent w-56"
          value={apiLimitCount}
          max="3"
        ></progress>
        <div className="flex justify-center items-center">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="flex justify-center text-center w-full rounded-md items-center bg-black py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
          >
            <p className="px-4">Upgrade</p>

            <div>
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-zap"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default FreeCounter;
