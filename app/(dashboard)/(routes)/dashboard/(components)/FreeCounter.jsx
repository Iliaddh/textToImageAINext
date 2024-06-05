"use client";
import { MAX_FREE_COUNTS } from "@/constants/constants";
import React, { useEffect } from "react";
import { useState } from "react";

const FreeCounter = ({ apiLimitCount}) => {
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
        <p>{apiLimitCount}/{MAX_FREE_COUNTS} Free Generations</p>
        <progress className="progress progress-accent w-56" value={apiLimitCount} max="3"></progress>
      </div>
    </div>
  );
};

export default FreeCounter;
