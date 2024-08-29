import React from "react";
import Image from "next/image";
import TryNowButton from "./trynowButton";
const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex-col bg-black p-4 justify-between h-full md:h-screen items-center pt-8 space-y-10"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl md:text-5xl text-white text-center">
          GENERATE QR CODES{" "}
          <span className="text-cyan-500 font-bold text-3xl md:text-5xl">
            INSTANTLY
          </span>
        </h1>
        <h1 className="text-3xl md:text-5xl text-white mb-4 text-center">
          WITH OUR{" "}
          <span className="text-cyan-500 font-bold text-3xl md:text-5xl">
            TELEGRAM BOT
          </span>
          !
        </h1>
        <h3 className="text-sm md:text-lg text-white my-4 w-full md:w-1/2 text-center">
          Unlock instant QR code creation with our Telegram bot. Perfect for
          businesses and individuals alike, generate QR codes quickly and
          easily—no hassle required.
        </h3>
        <TryNowButton />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-2 md:mt-0 md:space-x-4 space-y-4 md:space-y-0">
        <Image
          src="/images/chatbot.png"
          alt="Chatbot Image"
          width={300}
          height={300}
          className="w-full md:w-auto h-auto md:h-60 lg:h-72 max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />

        <Image
          src="/images/telegram.png"
          alt="Telegram Image"
          width={300}
          height={300}
          className="w-full md:w-auto h-auto md:h-60 lg:h-72 max-w-xs md:max-w-md lg:max-w-lg object-contain animate-pulse rotate-90 md:rotate-0"
        />

        <Image
          src="/images/mobile.png"
          alt="QR Code Image"
          width={300}
          height={300}
          className="w-full md:w-auto h-auto md:h-60 lg:h-72 max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
