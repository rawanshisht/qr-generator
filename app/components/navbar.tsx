import Link from "next/link";
import React from "react";
import TryNowButton from "./trynowButton";

const Navbar = () => {
  return (
    <div className="navbar bg-black p-4 sticky top-0 z-50 shadow-md w-screen">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <Link
                href="#howitworks"
                className="text-white text-md md:text-lg hover:text-cyan-300 visited:text-white"
              >
                How it works?
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-white text-md md:text-lg hover:text-cyan-300 visited:text-white"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-white text-md md:text-lg hover:text-cyan-300 visited:text-white"
              >
                FAQ
              </Link>
            </li>
            <li className="mt-2">
              <TryNowButton />
            </li>
          </ul>
        </div>
        <Link
          href="#hero"
          className="btn btn-ghost text-2xl text-white sm:text-md"
        >
          QR Generator
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="#howitworks"
              className="text-white text-md md:text-lg hover:text-cyan-300 visited:text-white"
            >
              How it works?
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="text-white text-md md:text-lg hover:text-cyan-300 visited:text-white"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="text-white text-md md:text-lg hover:text-cyan-300 visited:text-white"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <TryNowButton />
      </div>
    </div>
  );
};

export default Navbar;
