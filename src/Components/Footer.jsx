import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            🚛 E Cart
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Designed and built with all the love in the world by the Luminar team with 
            the help of our contributors. <br />
            Code licensed Luminar, docs CC BY 3.0. <br />
            Currently v5.3.2.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Landing Page</a></li>
            <li><a href="#" className="hover:underline">Home Page</a></li>
            <li><a href="#" className="hover:underline">History Page</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">React</a></li>
            <li><a href="#" className="hover:underline">React Bootstrap</a></li>
            <li><a href="#" className="hover:underline">React Router</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contacts Us</h3>
          <div className="flex items-center mb-4">
            <input 
              type="email" 
              placeholder="Enter Your Email Here.." 
              className="w-full p-2 rounded-l-lg text-black"
            />
            <button className="bg-white text-purple-600 px-3 rounded-r-lg">→</button>
          </div>

          <div className="flex space-x-4 text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaPhone /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm border-t border-purple-400 pt-5">
        Copyright © May 2024 Batch, Media Player. Built with React.
      </div>
    </footer>
  );
};

export default Footer;
