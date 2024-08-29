import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-6 md:p-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <nav className="flex flex-col space-y-2 md:space-y-4">
            <h6 className="footer-title text-lg font-bold">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col space-y-2 md:space-y-4">
            <h6 className="footer-title text-lg font-bold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col space-y-2 md:space-y-4">
            <h6 className="footer-title text-lg font-bold">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="flex flex-col items-center md:items-start">
            <h6 className="footer-title text-lg font-bold mb-2">Newsletter</h6>
            <fieldset className="form-control w-full md:w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="flex flex-col md:flex-row">
                <input
                  type="text"
                  placeholder="qrgenerator@gmail.com"
                  className="input input-bordered w-full md:w-auto mb-2 md:mb-0 md:mr-2"
                />
                <button className="btn bg-cyan-500 w-full md:w-auto">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
