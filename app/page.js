"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import { Loader } from "./(components)";
import { Card } from "./(components)";
import { FormField } from "./(components)";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { useAppContext } from "@/context/page";
import { useRouter } from "next/navigation";
import Navbar from "./(components)/Navbar";
import {
  SignOutButton,
  SignedOut,
  SignedIn,
  SignInButton,
  RedirectToSignIn,
  useAuth,
} from "@clerk/nextjs";
import Footer from "./(components)/Footer";
const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const { logIn, signUp } = useAppContext();

  return (
    <>
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
            <Link href={isSignedIn ? "/dashboard" : "sign-in"}>
              <p className="btn btn-success  text-white drop-shadow-xl w-24">
                Create
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
