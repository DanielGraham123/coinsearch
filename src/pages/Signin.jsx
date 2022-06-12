import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-height-[600px] px-4 py-20 shadow-xl  rounded-md my-6">
        <h1 className="text-2xl font-bold">Sign In</h1>

        <form action="">
          <div className="my-4">
            <label>E-mail</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                placeholder="E-mail"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                placeholder="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>

          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Sign In
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Signin;
