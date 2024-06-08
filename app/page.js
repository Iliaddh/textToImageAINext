"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./(components)/Navbar";
import { useAuth } from "@clerk/nextjs";


function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div className="h-full">
      <Navbar />
      <div className="hero min-h-96 bg-base-200 rounded-md">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold ">Hello there</h1>
            <p className="py-6">
              Transform your ideas into captivating visuals instantly. Our
              AI-powered image generator lets you create professional-quality
              images with just a few clicks.
            </p>
            <Link href={isSignedIn ? "/generate" : "sign-in"}>
              <p className="btn btn-success  text-white drop-shadow-xl w-24">
                Create
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full border-opacity-50 mt-10">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </div>
  );
}

export default Home;
