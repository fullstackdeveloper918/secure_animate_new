"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import { navigation } from "@/lib/content/navigation";
import BookDemoForm from "../model/BookDemoForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [utmParams, setUtmParams] = useState(""); // Store UTM parameters
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utmString = urlParams.toString();
      if (utmString) {
        setUtmParams(`?${utmString}`);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    router.push(utmParams ? `/${utmParams}` : "/");
  };

  return (
    <>
      <header className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <button onClick={handleLogoClick}>
            <Image src="/logo.png" alt="Fintu Logo" width={100} height={100} />
          </button>
        </div>

        {/* Center Section: Navigation (Desktop) */}
        <div className="flex items-center justify-center flex-1">
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={`${item.href}${utmParams}`}>
                <span className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section: Phone number, Button, and Login Link */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:flex items-center text-sm font-medium">
            <span className="bg-transparent hover:bg-blue-100 text-blue-800 rounded-full p-1 mr-2">
              <Image
                src="/phone_icon.png"
                alt="Phone icon"
                width={100}
                height={100}
                className="w-[100%]"
              />
            </span>
            801-681-9899
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setModalShow(true)}
            className="rounded-full"
          >
            Book a Demo
          </Button>

          <Link href={`https://app.fintu.io/login${utmParams}`}>
            <Button variant="gradient" size="sm" className="rounded-full px-6">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-[24px] h-[24px] ml-4"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-80 z-50">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white text-5xl">
                &times;
              </button>
            </div>
            <div className="flex justify-center items-center flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`${item.href}${utmParams}`}
                  className="text-white text-xl border-b-2 px-[50px] py-[10px] hover:border-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <BookDemoForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Header;
