import React from "react";

const FAQ = () => {
  return (
    <div id="faq" className="space-y-2 p-4">
      <h1 className="text-3xl font-bold text-cyan-500 text-center pb-8">FAQ</h1>
      <div className="collapse collapse-arrow bg-black ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-md md:text-xl font-medium text-cyan-500">
          How do I use the bot?
        </div>
        <div className="collapse-content text-white">
          <p>
            Simply open the bot on Telegram and follow the instructions. Enter
            the content you want to encode (such as a URL or text), and the bot
            will generate a QR code instantly.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-md md:text-xl font-medium text-cyan-500">
          Is it free?
        </div>
        <div className="collapse-content text-white">
          <p>
            Yes, the bot is free to use for generating standard QR codes. There
            may be additional features or customizations available for a fee.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-md md:text-xl font-medium text-cyan-500">
          What can I generate QR codes for?
        </div>
        <div className="collapse-content text-white">
          <p>
            You can generate QR codes for various purposes including URLs, Wi-Fi
            credentials, contact information, event details, and more.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-md md:text-xl font-medium text-cyan-500">
          Can I customize the QR code?
        </div>
        <div className="collapse-content text-white">
          <p>
            Basic QR codes are generated instantly. In the future, we may
            introduce options for customizing the appearance, such as adding
            colors, logos, or changing the design. Keep an eye out for updates!
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-black">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-md md:text-xl font-medium text-cyan-500">
          Can I track my QR code scans?
        </div>
        <div className="collapse-content text-white">
          <p>
            Yes, our Telegram bot allows you to track how many times your QR
            code has been scanned. This feature helps you gauge the reach and
            effectiveness of your QR codes, whether for marketing, promotions,
            or personal use, and adjust your strategy based on the engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
