import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features" className="p-4 m-4">
      <h1 className="text-3xl font-bold text-cyan-500 text-center pb-8">
        Features
      </h1>
      <div className="space-y-8 px-4">
        {/* Custom QR Codes */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div className="bg-white flex justify-center items-center w-full md:w-1/2">
            <Image
              src="/images/custom.jpg"
              alt="Custom QR Image"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-xl font-bold text-cyan-500 text-center md:text-left">
              Custom QR Codes
            </h1>
            <h3 className="text-md font-semibold text-black text-center md:text-left">
              Unlike many basic QR code generators, our Telegram bot provides
              the flexibility to generate QR codes for different types of
              content. Whether you need to create a code for a URL, plain text,
              contact information, Wi-Fi credentials, or even an email, our bot
              can handle it all. This versatility makes it suitable for both
              personal and business use, whether you are promoting a website,
              sharing a network, or offering easy-to-access contact details.
            </h3>
          </div>
        </div>

        {/* Instant Generation */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-xl font-bold text-cyan-500 text-center md:text-left">
              Instant Generation
            </h1>
            <h3 className="text-md font-semibold text-black text-center md:text-left">
              No waiting or delays—once you input your desired content into the
              bot, your QR code is generated instantly. The bot is designed for
              speed and efficiency, ensuring that you can access and use your QR
              code in seconds. This is particularly useful when you are on the
              go and need a quick, hassle-free solution.
            </h3>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-1/2 h-64 order-1 md:order-2">
            <Image
              src="/images/clock.png"
              alt="Clock Image"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>

        {/* No Need for Extra Apps */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div className="bg-white flex justify-center items-center w-full md:w-1/2 h-64">
            <Image
              src="/images/telegram.png"
              alt="Telegram Image"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-xl font-bold text-cyan-500 text-center md:text-left">
              No Need for Extra Apps
            </h1>
            <h3 className="text-md font-semibold text-black text-center md:text-left">
              One of the standout features of our bot is that it works entirely
              within Telegram. You don’t need to download or install additional
              software or apps to generate your QR code. Since Telegram is
              already widely used by millions, this integration keeps things
              simple and streamlined. Users avoid the clutter of extra apps on
              their devices, making the process much more efficient.
            </h3>
          </div>
        </div>

        {/* Track Your Scans */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-xl font-bold text-cyan-500 text-center md:text-left">
              Track Your Scans
            </h1>
            <h3 className="text-md font-semibold text-black text-center md:text-left">
              With our Telegram bot, you can track how many times your QR code
              has been scanned. This feature provides valuable insights into the
              effectiveness of your QR codes, helping you adjust your strategy
              based on engagement.
            </h3>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-1/2 h-64 order-1 md:order-2">
            <Image
              src="/images/tracking.jpg"
              alt="Tracking Image"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>

        {/* Secure & Private */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div className="bg-white flex justify-center items-center w-full md:w-1/2 h-64">
            <Image
              src="/images/secure.png"
              alt="Security Image"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-xl font-bold text-cyan-500 text-center md:text-left">
              Secure & Private
            </h1>
            <h3 className="text-md font-semibold text-black text-center md:text-left">
              We take user privacy and security very seriously. All information
              you input into the bot stays private and is not shared with third
              parties. The bot only generates the QR code without retaining
              sensitive information, ensuring your data remains secure
              throughout the process.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
