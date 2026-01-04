import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Learn<span className="text-white">Stream</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              A platform focused on practical learning, real-world projects,
              and consistent growth for developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@learnstream.dev</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} LearnStream. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
