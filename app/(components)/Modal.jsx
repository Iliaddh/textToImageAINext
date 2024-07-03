import React from "react";
import { useAppContext } from "@/context/page";
import { Check } from "lucide-react";

const Modal = () => {
  const { setDialogOpen } = useAppContext();
  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 sm:p-8"
    >
      <div className="bg-white drop-shadow-xl p-4 sm:p-10 w-full max-w-md sm:max-w-2xl h-auto rounded-md ">
        <form method="dialog">
          <button
            onClick={() => setDialogOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="flex justify-center font-bold">
          <h3 className="flex text-lg">Upgrade to </h3>
          <p className="ml-2 bg-black flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 rounded-xl px-2 py-1">
            Pro
          </p>
        </div>
        <div className="mt-4">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium flex justify-between">
              <p>Higher Resolution</p>
              <Check />
            </div>
            <div className="collapse-content">
              <p>
                Upgrade to unlock stunning, high-resolution images that capture
                every detail beautifully.
              </p>
            </div>
          </div>
          <div className="mt-4 collapse bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between">
              <p>Unlimited Downloads</p>
              <Check />
            </div>
            <div className="collapse-content">
              <p>
                Upgrade your plan for unlimited downloads, allowing you to
                generate as many images as you need without restrictions.
              </p>
            </div>
          </div>
          <div className="mt-4 collapse bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between">
              <p>Priority Processing</p>
              <Check />
            </div>
            <div className="collapse-content">
              <p>
                Premium users enjoy priority processing, ensuring lightning-fast
                image generation even during peak hours.
              </p>
            </div>
          </div>
          <div className="mt-4 collapse bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between">
              <p>Dedicated Support</p>
              <Check />
            </div>
            <div className="collapse-content">
              <p>
                Enjoy peace of mind with dedicated support available exclusively
                to our premium users, offering personalized assistance whenever
                you need it.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 rounded-md mt-5">
          <button className="mr-2 p-2 flex justify-center items-center">
            <p className="flex">Upgrade</p>
            <svg
              className="fill-white ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-zap"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
