 import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700/90 via-purple-700/90 to-pink-700/90 backdrop-blur-md text-white py-12 px-6 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold flex items-center gap-2">
            🚛 Daily Cart
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Bringing you the best products with love and speed 🚀. <br />
            Powered by Luminar Developers. <br />
            Currently v5.3.2.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:text-yellow-300 transition">Landing Page</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Home Page</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">History Page</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Guides</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:text-green-300 transition">React</a></li>
            <li><a href="#" className="hover:text-green-300 transition">React Bootstrap</a></li>
            <li><a href="#" className="hover:text-green-300 transition">React Router</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <div className="flex items-center mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-l-full text-black focus:outline-none shadow-md"
            />
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-r-full font-bold hover:bg-yellow-300 transition shadow-md">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mt-4">
            <a href="#" className="hover:text-sky-400 transition duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition duration-300"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-300 transition duration-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300 transition duration-300"><FaGithub /></a>
            <a href="#" className="hover:text-green-400 transition duration-300"><FaPhone /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © 2025 Daily Cart. All rights reserved. | Built with ❤️ using React
      </div>
    </footer>
  );
};

export default Footer;
