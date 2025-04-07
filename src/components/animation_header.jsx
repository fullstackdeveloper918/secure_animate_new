"use client"; // Client-side component

import Link from "next/link";
import React from "react";
import Image from "next/image";

const AnimationHeader = () => {
  return (
    <>
      <div className="word"></div>
      {/* <div className="cd-index cd-main-content"> */}
      {/* <div
          id="clapat-page-content"
          className="dark-content"
          data-bgcolor="#ebebeb"
        > */}
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
            {/* <div className="nav-height"> */}
            <ul data-breakpoint="1025" className="flexnav">
              <li className="menu-timeline link header-link">
                <Link className="ajax-link" href="/">
                  Home
                </Link>
              </li>

              <li className="menu-timeline link header-link">
                <Link className="ajax-link" href="/about-us">
                  About Us
                </Link>
              </li>

              <li className="menu-timeline link header-link">
                <Link className="ajax-link" href="/service">
                  Service
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

              <li className="menu-timeline link header-link">
                <Link className="ajax-link" href="/why-choose">
                  Why Choose Us
                </Link>
              </li>

              <li className="menu-timeline link header-link">
                <Link className="ajax-link" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* </div> */}
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
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default AnimationHeader;
