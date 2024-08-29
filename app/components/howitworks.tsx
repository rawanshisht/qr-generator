import React, { useState, useEffect } from "react";
import Stepper from "./stepper";

const HowItWorks = () => {
  return (
    <div id="howitworks" className="p-4 m-4">
      <h1 className="text-2xl md:text-3xl font-bold text-cyan-500 text-center pb-4">
        How to Generate QR Codes with Telegram Bot?
      </h1>
      <h3 className="text-lg md:text-xl font-bold text-cyan-500 text-center">
        3 Simple Steps
      </h3>
      <div className="w-full flex justify-center">
        <Stepper />
      </div>
    </div>
  );
};

export default HowItWorks;
