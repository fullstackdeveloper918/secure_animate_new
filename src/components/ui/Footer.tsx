import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Social Media */}
          <div>
            <div className="flex items-center justify-start gap-2">
              <Image
                src="/footer-logo.png"
                alt="Company Logo"
                width={43}
                height={40}
              />
              <h2 className="text-[36px] font-bold">FINTU</h2>
            </div>
            <p className="text-gray-400 text-sm pt-2">
              Empowering businesses with innovative solutions.
            </p>
            <div className="flex space-x-4 mt-2">
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-white transition text-[#9ca3af]"
              >
                <i className="bi bi-facebook text-xl"></i> 
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition text-[#9ca3af]"
              >
                <i className="bi bi-twitter text-xl"></i> 
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition text-[#9ca3af]"
              >
                <i className="bi bi-instagram text-xl"></i>{" "}
              </Link> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 pl-0">
              {/* <li>
                <Link
                  href="/what-we-do"
                  className="hover:text-white transition text-[#9ca3af]"
                >
                  What We Do
                </Link>
              </li> */}
              <li>
                <Link
                  href="/our-offerings"
                  className="hover:text-white transition text-[#9ca3af]"
                >
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition text-[#9ca3af]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-serve"
                  className="hover:text-white transition text-[#9ca3af]"
                >
                  Who We Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">Email: contact@fintu.io </p>
            <p className="text-gray-400 text-sm mt-2">Phone: 801-681-9899</p>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} FINTU. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
