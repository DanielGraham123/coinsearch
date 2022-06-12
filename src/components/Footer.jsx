import React from "react";
import ThemeToggler from "./ThemeToggler";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

function Footer() {
  const supportLinks = [
    ["Help Center", ""],
    ["contact us", ""],
    ["api status", ""],
    ["documentation", ""],
  ];

  const infoLinks = [
    ["about us", ""],
    ["careers", ""],
    ["invest", ""],
    ["legal", ""],
  ];

  return (
    <div className=" rounded-div py-8 px-16">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px]">
          <div className="">
            <h1 className="uppercase font-bold">Support</h1>

            <ul className="mt-2">
              {supportLinks.map(([text, link]) => (
                <li className="uppercase text-sm py-2">
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="uppercase font-bold">Info</h1>

            <ul className="mt-2">
              {infoLinks.map(([text, link]) => (
                <li className="uppercase text-sm py-2">
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:pr-10">
          {/* theme toggler */}
          <div className="flex justify-center md:justify-end pt-4 md:pt-0">
            <ThemeToggler className="text-right" />
          </div>

          {/* email field */}
          <div className="">
            <p className="flex justify-center md:justify-end py-4 ">
              Sign up for crypto news
            </p>

            <form action="" className="text-right">
              <input
                type="email"
                className="mr-2 bg-primary border border-input p-4 py-2 rounded-2xl shadow-xl w-full md:w-auto"
                placeholder="Enter your email"
              />

              <button className="text-btnText bg-button px-4 py-2 rounded-xl shadow-xl hover:shadow-2xl w-full md:w-auto my-2">
                Sign up
              </button>
            </form>
          </div>

          {/* social icons */}
          <div className="justify-around flex pb-6 pt-10 text-accent">
            <FaFacebook />
            <FaGithub />
            <FaTiktok />
            <FaTwitter />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="pt-6">
          Powered by <a href="https://coingecko.com">CoinGecko</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
