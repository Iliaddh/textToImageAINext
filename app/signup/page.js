"use client";

import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/page";

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setSignUp } = useAppContext();

  const signUpHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    alert("Sign up successful");
    setSignUp(true);
    router.push("/");
    console.log(data);
  };
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label">
            <Link href="/login" className="label-text-alt link link-hover">
              Have an account?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={signUpHandler}>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
