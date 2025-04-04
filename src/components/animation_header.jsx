"use client"; // Add this line to mark the component as a Client Component

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { config } from "../../config";
import Image from "next/image";

const AnimationHeader = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${config.APP_URL}/secure-plugin/v1/navbar`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      setHeaderData(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  if (!headerData) {
    return <div>Loading...</div>; // Loading state until the data is fetched
  }

  return (
    <>
      <div className="word"></div>
      <div className="cd-index cd-main-content">
        <div
          id="clapat-page-content"
          className="dark-content"
          data-bgcolor="#ebebeb"
        >
          <header
            className="clapat-header classic-menu invert-header"
            data-menucolor="#0c0c0c"
          >
            <div className="header-gradient"></div>

            <div id="header-container">
              <div id="clapat-logo" className="hide-ball">
                <Link
                  className="ajax-link"
                  data-type="page-transition"
                  href="/"
                >
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
                <div className="nav-height">
                  <ul data-breakpoint="1025" className="flexnav">
                    {headerData?.menu_items?.map((item, index) => (
                      <React.Fragment key={index}>
                        <li className="menu-timeline link header-link">
                          <Link
                            className="ajax-link"
                            data-type="page-transition"
                            href={`/${item?.slug}`}
                          >
                            {item?.title}
                          </Link>
                          {item?.children?.length > 0 && (
                            <div className="sub-menu">
                              {item?.children?.map((child, childIndex) => (
                                <React.Fragment key={childIndex}>
                                  <Link href={`/service/${child?.slug}`}>
                                    {child?.title}
                                  </Link>
                                </React.Fragment>
                              ))}
                            </div>
                          )}
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </nav>

              <Link
                className="header-button ajax-link"
                data-type="page-transition"
                href="/contact-us"
              >
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
        </div>
      </div>
    </>
  );
};

export default AnimationHeader;
