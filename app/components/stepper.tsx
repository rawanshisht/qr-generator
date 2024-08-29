"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Stepper = () => {
  return (
    <div className="relative w-full py-4 flex flex-col items-center">
      {/* Vertical line */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full z-0"></div>

      {/* Step 1 */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 py-8 relative">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 flex justify-center md:justify-end">
          <Image
            src="/images/chatbot.png"
            alt="Step 1"
            width={300}
            height={300}
            className="object-contain w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
        <div className="hidden md:flex w-10 justify-center z-10">
          <div className="h-8 w-8 rounded-full bg-cyan-500"></div>
        </div>
        <motion.div
          className="w-full md:w-1/2 pl-0 md:pl-8 mt-4 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-cyan-500">
            Step 1: Open the bot on Telegram
          </h2>
          <p>Open the QR code generator bot directly from Telegram.</p>
        </motion.div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 py-8 relative">
        <motion.div
          className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right mt-4 md:mt-0  order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-cyan-500">
            Step 2: Input your content
          </h2>
          <p>Enter the content you want to encode in the QR code.</p>
        </motion.div>
        <div className="hidden md:flex w-10 justify-center z-10 order-2 md:order-2">
          <div className="h-8 w-8 rounded-full bg-cyan-500"></div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center md:justify-start order-1 md:order-3">
          <Image
            src="/images/typing.jpg"
            alt="Step 2"
            width={300}
            height={300}
            className="object-contain w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 py-8 relative">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 flex justify-center md:justify-end">
          <Image
            src="/images/mobile.png"
            alt="Step 3"
            width={300}
            height={300}
            className="object-contain w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
        <div className="hidden md:flex w-10 justify-center z-10">
          <div className="h-8 w-8 rounded-full bg-cyan-500"></div>
        </div>
        <motion.div
          className="w-full md:w-1/2 pl-0 md:pl-8 mt-4 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-cyan-500">
            Step 3: Receive your QR code instantly
          </h2>
          <p>Receive your custom QR code instantly and share it with others.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stepper;
