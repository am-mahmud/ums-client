import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- Logo and Description --- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-[#2A7B9B]"> Utility</span> Management System
          </h2>
          <p className="text-sm leading-relaxed">
            A smart way to track, manage, and pay your utility bills — all in one place.
          </p>

         
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

    
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Useful Links</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Bills</a></li>
            <li><a href="#" className="hover:text-yellow-400">Categories</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>


        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Support</a></li>
          </ul>
        </div>

       
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} UtilityManage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
