"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import { useAuth } from "@clerk/nextjs";

function Home() {
  const { isSignedIn } = useAuth();

  const [posts, setPosts] = useState([]);  

  useEffect(() => { 
    const fetchAllPosts = async () => { 
      try {
        const response = await fetch("/api/post/getallposts");
        const data = await response.json();
        console.log(data);
        setPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="h-lvh">
      <Navbar />
      <div className="hero h-2/3 bg-base-200 rounded-md">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold desktop:text-7xl">Hello there</h1>
            <p className="py-6 desktop:text-xl">
              Transform your ideas into captivating visuals instantly. Our
              AI-powered image generator lets you create professional-quality
              images with just a few clicks.
            </p>
            <Link href={isSignedIn ? "/generate" : "/sign-in"}>
              <p className="btn btn-success text-white drop-shadow-xl w-24">
                Create
              </p>
            </Link>
          </div>
        </div>
      </div>
      <section className="p-4 mt-10 bg-base-200 rounded-md h-auto tablet:h-3/4">
        <div className="grid grid-rows-10 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 h-full gap-4">
          {/* First card spanning more rows on smaller screens */}
          {posts.length > 0 && (
            <div className="p-4 bg-white rounded-lg shadow-lg row-span-4 mobile:col-span-2 mobile:row-span-6 tablet:row-span-6 laptop:row-span-7 desktop:row-span-10">
              <div className="h-full flex items-center justify-center bg-gray-100 rounded-md">
                <img src={posts[11].photoUrl} alt="Post Image 1" className="object-cover w-full h-full rounded-md" />
              </div>
            </div>
          )}

          {/* Other cards */}
          {posts.slice(12,18).map((post, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg row-span-4 mobile:row-span-3 tablet:row-span-4 laptop:row-span-5 desktop:row-span-5">
              <div className="h-full flex items-center justify-center bg-gray-100 rounded-md">
                <img src={post.photoUrl} alt={`Post Image ${index + 2}`} className="object-cover w-full h-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-20">
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
