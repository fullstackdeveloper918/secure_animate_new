"use client"; // Client-side component

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Typing from "react-typing-animation";

// PreLoader Component to add typing animation to text
const PreLoader = ({ text }) => {
  return (
    <Typing loop={true} speed={100} eraseDelay={3000} cursor={false}>
      {text}
    </Typing>
  );
};

const AnimationHeader = () => {
  // State to store the current text for the navigation menu item
  const [hoveredText, setHoveredText] = useState(null);

  const handleMouseEnter = (text) => {
    setHoveredText(text); // Set the hovered text
  };

  const handleMouseLeave = () => {
    setHoveredText(null); // Reset the text when hover ends
  };

  return (
    <>
      <div className="word"></div>
      <header
        className="clapat-header classic-menu invert-header"
        data-menucolor="#0c0c0c"
      >
        <div className="header-gradient"></div>

        <div id="header-container">
          <div id="clapat-logo" className="hide-ball">
            <Link className="ajax-link" href="/">
              <Image
                className="black-logo"
                src="/images/secure365-logo-black.png"
                alt="ClaPat Logo"
                width={210}
                height={21}
              />
              <Image
                className="white-logo"
                src="/images/secure365-logo.png"
                alt="ClaPat Logo"
                width={210}
                height={21}
              />
            </Link>
          </div>

          <nav className="clapat-nav-wrapper">
            <ul data-breakpoint="1025" className="flexnav">
              <li
                className="menu-timeline link header-link"
                onMouseEnter={() => handleMouseEnter("Home")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="ajax-link" href="/">
                  {hoveredText === "Home" ? (
                    <PreLoader text="Welcome Home" />
                  ) : (
                    "Home"
                  )}
                </Link>
              </li>

              <li
                className="menu-timeline link header-link"
                onMouseEnter={() => handleMouseEnter("About Us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="ajax-link" href="/about-us">
                  {hoveredText === "About Us" ? (
                    <PreLoader text="Learn About Us" />
                  ) : (
                    "About Us"
                  )}
                </Link>
              </li>

              <li
                className="menu-timeline link header-link"
                onMouseEnter={() => handleMouseEnter("Service")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="ajax-link" href="/service">
                  {hoveredText === "Service" ? (
                    <PreLoader text="Our Excellent Services" />
                  ) : (
                    "Service"
                  )}
                </Link>
                <div className="sub-menu">
                  <Link href="/service/serversetupconfiguration">
                    Server & Cloud Management
                  </Link>
                  <Link href="/service/threatdetection">
                    Cybersecurity Solutions Service
                  </Link>
                  <Link href="/service/technicalsupport">Support Service</Link>
                  <Link href="/service/keywordoptimization">
                    Business SEO & Digital Visibility
                  </Link>
                  <Link href="/service/contentwriting">
                    Content Creation & Marketing Services
                  </Link>
                  <Link href="/service/inventorytracking">
                    Inventory Management Solutions
                  </Link>
                  <Link href="/service/userinterfacedesign">
                    UX/UI Design & Website Development
                  </Link>
                  <Link href="/service/fraudinvestigation">
                    IT Detective Services & Scam Recovery
                  </Link>
                  <Link href="/service/paymentgatewayintegration">
                    Secure Payments & Fraud Detection
                  </Link>
                </div>
              </li>

              <li
                className="menu-timeline link header-link"
                onMouseEnter={() => handleMouseEnter("Why Choose Us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="ajax-link" href="/why-choose">
                  {hoveredText === "Why Choose Us" ? (
                    <PreLoader text="Discover Why Choose Us" />
                  ) : (
                    "Why Choose Us"
                  )}
                </Link>
              </li>

              <li
                className="menu-timeline link header-link"
                onMouseEnter={() => handleMouseEnter("Contact Us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="ajax-link" href="/contact-us">
                  {hoveredText === "Contact Us" ? (
                    <PreLoader text="Get in Touch" />
                  ) : (
                    "Contact Us"
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          <Link className="header-button ajax-link" href="/contact-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Let's Talk">Let's Talk</span>
              </div>
            </div>
          </Link>

          <div className="button-wrap right menu burger-lines">
            <div className="icon-wrap parallax-wrap">
              <div className="button-icon parallax-element">
                <div id="burger-wrapper">
                  <div id="menu-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-text sticky right">
              <span data-hover="Menu">Menu</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AnimationHeader;
