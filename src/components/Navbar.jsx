import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const [hamburgerMenu, sethamburgerMenu] = useState(false);

  const { loggedInUser, logout } = UserAuth();
  const navigate = useNavigate();

  const toggleMobile = () => {
    sethamburgerMenu(!hamburgerMenu);
  };

  const signOuFn = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <span className="text-2xl">Cryptobase</span>
      </Link>

      <div className="hidden md:block">
        <ThemeToggler />
      </div>

      {loggedInUser?.email ? (
        <div>
          <Link to="account" className="p-4">
            Account
          </Link>
          <button onClick={signOuFn}>Sign Out</button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="signin" className="p-4 hover:text-accent">
            Sign In
          </Link>
          <Link
            to="signup"
            className="text-btnText bg-button px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            <span>Sign Up</span>
          </Link>
        </div>
      )}

      {/* Hamburger Icon */}
      <div onClick={toggleMobile} className="md:hidden cursor-pointer z-10">
        {hamburgerMenu ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          hamburgerMenu
            ? "md:hidden fixed top-20 right-0 w-full h-[92%] z-10 flex flex-col items-center justify-between bg-primary ease-in duration-300"
            : "fixed right-[-100%] top-20 h-[-90%] duration-300 flex flex-col items-center ease-in justify-between"
        }
      >
        <ul className="w-full px-2 py-4">
          <li onClick={toggleMobile} className="border-b py-6">
            <Link to="/">Home</Link>
          </li>

          {loggedInUser?.email && (
            <li onClick={toggleMobile} className="border-b py-6">
              <Link to="account">Account</Link>
            </li>
          )}

          <li className="py-4">
            <ThemeToggler />
          </li>
        </ul>

        <div className="flex flex-col w-full px-2 py-4">
          {loggedInUser?.email ? (
            <button
              className="w-full bg-teal-600 my-8 p-3 border border-secondary rounded-2xl shadow-xl"
              onClick={() => {
                signOuFn();
                toggleMobile();
              }}
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link onClick={toggleMobile} to="signin">
                <button className="w-full bg-primary text-primary my-2 p-3 border border-secondary rounded-2xl shadow-xl">
                  Sign In
                </button>
              </Link>
              <Link onClick={toggleMobile} to="signup">
                <button className="w-full bg-button text-btnText rounded-2xl shadow-xl my-2 p-3">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
