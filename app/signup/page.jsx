import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Router from "next/router";
function SignUp({setSignUp}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  

  const signUpHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8080/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    alert("Sign up successful");
    setSignUp(true);
    Router.push("/");
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
            <Link to="/login" className="label-text-alt link link-hover">
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
