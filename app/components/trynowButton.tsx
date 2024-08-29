import React from "react";
import Link from "next/link";

const TryNowButton = () => {
  return (
    <button className="btn btn-sm md:btn-md border-none bg-cyan-500 text-black text-md md:text-xl shadow-md shadow-neutral-700 px-4 py-2 font-semibold hover:bg-cyan-600 transition ease-in-out delay-150  hover:-translate-y-1 duration-300 mr-4">
      Try it Now
    </button>
  );
};

export default TryNowButton;
