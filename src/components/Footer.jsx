import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaInstagram, FaShoppingBag, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-roboto py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <FaShoppingBag className="text-xl text-white" />
            <span className="text-xl font-bold">ShopMe</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Your one-stop fashion destination.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex items-center gap-2 mb-2 text-sm justify-center md:justify-start">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>New York, USA</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-sm justify-center md:justify-start">
            <FaPhoneAlt className="text-gray-400" />
            <span>+92 7878 6577889</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-gray-400 justify-center md:justify-start">
            <a href="#"><CiFacebook className="hover:text-white transition" /></a>
            <a href="#"><CiLinkedin className="hover:text-white transition" /></a>
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        &copy; 2025 ShopMe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
