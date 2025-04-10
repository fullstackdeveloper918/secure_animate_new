'use client';
import PreLoader from '../components/preLoader';
import AnimationHeader from '../components/animation_header';
import HeroSection from '../components/HeroSection';
import AwardOne from '@/components/award/award-one';
import ProjectTextLine from '@/components/project/project-text-line';
import TeamOne from '@/components/team/team-one';
import TestimonialOne from '@/components/testimonial/testimonial-one';
import BlogOne from '@/components/blog/blog-one';
import FooterFour from '@/layouts/footers/footer-four';
import RealEstateSection from '@/components/about/about-six';
import WebDevelopment from '@/components/about/about-seven';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Libre_Franklin } from 'next/font/google';
import { config } from '../../config';
import BrandOne from '@/components/brand/brand-one';
import PainSection from '@/components/what-us-diff/whatusdiff';
import ProjectOne from '@/components/project/project-one';
import ProjectFour from '@/components/project/project-four';
import ProjectFive from '@/components/project/project-five';
import ProjectSix from '@/components/project/project-six';
// import bannerDiv from "../../../public/assets/img/inner-faq/faq/InnerDiv.png";
import bannerDiv from '../../public/assets/img/inner-faq/faq/InnerDiv.png';
import SecureSection from '@/components/whysecure/SecureSection';
import HeroBannerAi from '@/components/hero-banner/hero-banner-ai';
import HeroSectionMain from '@/components/hero-banner/HeroSectionMain';
import { AnimatedPinDemo } from '../components/ui/AnimatedPinDemo';

const businessesData = [
  {
    text: 'We help businesses',
    image: 'https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png',
  },
  {
    text: 'to innovate and',
    image: 'https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png',
  },
];

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.APP_URL}/secure-plugin/v1/home`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Add a delay before updating the state
        setTimeout(() => {
          setData(result);
          setLoading(false); // stop loading after delay
        }, 8000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // stop loading even if there is an error
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <PreLoader />;
  }
  return (
    <>
      {/* <div className="cd-index cd-main-content homepage"> */}
      <div id="clapat-page-content" className="dark-content" data-bgcolor="#ebebeb">
        {/* <AnimationHeader /> */}
        <div id="content-scroll">
          <div id="main">
            {/* <HeroSection data={data?.featured_section_heading} /> */}
            {/* <HeroBannerAi /> */}
            <HeroSectionMain />
            <RealEstateSection />
            {/* <WebDevelopment /> */}

            {/* <BrandOne /> */}
            <PainSection />
            <AnimatedPinDemo />

            <div className="awardsSec pt-10">
              <AwardOne data={data} />
            </div>
          </div>

          <footer className="clapat-footer hidden">
            <div id="footer-container">
              <div id="backtotop" className="button-wrap left">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-angle-up"></i>
                  </div>
                </div>
                <div className="button-text sticky left">
                  <span data-hover="Back Top">Back Top</span>
                </div>
              </div>

              <div className="footer-middle">
                <div className="copyright">
                  2024 ©{' '}
                  <Link className="link" target="_blank" href="https://www.clapat.com/">
                    ClaPat
                  </Link>
                  . All rights reserved.
                </div>
              </div>

              <div className="socials-wrap">
                <div className="socials-icon">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
                <div className="socials-text">Follow Us</div>
                <ul className="socials">
                  <li>
                    <span className="parallax-wrap">
                      <Link
                        className="parallax-element"
                        href="https://www.dribbble.com/clapat"
                        target="_blank"
                      >
                        Db
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="parallax-wrap">
                      <Link
                        className="parallax-element"
                        href="https://www.twitter.com/clapatdesign"
                        target="_blank"
                      >
                        Tx
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="parallax-wrap">
                      <Link
                        className="parallax-element"
                        href="https://www.behance.com/clapat"
                        target="_blank"
                      >
                        Be
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="parallax-wrap">
                      <Link
                        className="parallax-element"
                        href="https://www.facebook.com/clapat.ro"
                        target="_blank"
                      >
                        Fb
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="parallax-wrap">
                      <Link
                        className="parallax-element"
                        href="https://www.instagram.com/clapat.themes/"
                      >
                        In
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>

        <div id="app"></div>
      </div>
      {/* </div> */}

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <main>
        {/* securesec */}
        <SecureSection />
        {/* securesec end*/}

        {/* <ProjectFive /> */}
        <ProjectSix />

        {/* projectsec end */}

        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <ProjectTextLine data={data} />
            </div>
          </div>
        </div>

        <TeamOne data={data} />
        <TestimonialOne data={data} />
        <div className="awardsSec">
          <BlogOne />
        </div>
      </main>
      <FooterFour />
      {/* </div>
      </div> */}

      <div className="cd-cover-layer"></div>
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x"></div>
          <div id="ball-drag-y"></div>
          <div id="ball-loader"></div>
        </div>
      </div>
      <div id="clone-image">
        <div className="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
    </>
  );
}
