'use client'; // Client-side component

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Typing Effect Component
const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text && index < text.length) {
      // Start typing the text one character at a time
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 100); // Typing speed (100ms per letter)

      return () => clearTimeout(timer);
    }
  }, [text, index]);

  return <span>{displayedText}</span>;
};

const AnimationHeader = () => {
  const [hoveredText, setHoveredText] = useState(null);
  const [activeItem, setActiveItem] = useState(null); // Track the active menu item

  const handleMouseEnter = (text) => {
    setHoveredText(text); // Set the hovered text to show typing effect
  };

  const handleMouseLeave = () => {
    setHoveredText(null); // Reset the hovered text when hover ends
  };

  const handleClick = (text) => {
    setActiveItem(text); // Set the clicked item as active
  };

  // Define the menu items
  const menuItems = ['Home', 'About Us', 'Service', 'Why Choose Us', 'Contact Us'];

  return (
    <>
      <div className="word"></div>

      <header className="clapat-header classic-menu invert-header" data-menucolor="#0c0c0c">
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
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`menu-timeline link header-link ${
                    activeItem === item ? 'active' : ''
                  }`}
                  // onMouseEnter={() => handleMouseEnter(item)}
                  // onMouseLeave={handleMouseLeave}
                  // onClick={() => handleClick(item)} // Set active on click
                >
                  <Link
                    className="ajax-link"
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {hoveredText === item ? <TypingEffect text={item} /> : item}
                  </Link>
                </li>
              ))}
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
