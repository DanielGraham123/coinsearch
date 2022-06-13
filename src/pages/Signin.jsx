import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signin } = UserAuth();

  const submitForm = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await signin(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-height-[600px] px-4 py-20 shadow-xl  rounded-md my-6">
        <h1 className="text-2xl font-bold">Sign In</h1>

        <form onSubmit={submitForm}>
          <div className="my-4">
            <label>E-mail</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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

        <p className="my-4">
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
