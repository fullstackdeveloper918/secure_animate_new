"use client";
import PreLoader from "../components/preLoader";
import AnimationHeader from "../components/animation_header";
import HeroSection from "../components/HeroSection";
import AwardOne from "@/components/award/award-one";
import ProjectTextLine from "@/components/project/project-text-line";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import BlogOne from "@/components/blog/blog-one";
import FooterFour from "@/layouts/footers/footer-four";
import RealEstateSection from "@/components/about/about-six";
import WebDevelopment from "@/components/about/about-seven";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Libre_Franklin } from "next/font/google";
import { config } from "../../config";
import BrandOne from "@/components/brand/brand-one";
import PainSection from "@/components/what-us-diff/whatusdiff";
import ProjectOne from "@/components/project/project-one";
import ProjectFour from "@/components/project/project-four";
import ProjectFive from "@/components/project/project-five";
import ProjectSix from "@/components/project/project-six";
// import bannerDiv from "../../../public/assets/img/inner-faq/faq/InnerDiv.png";
import bannerDiv from "../../public/assets/img/inner-faq/faq/InnerDiv.png";
import SecureSection from "@/components/whysecure/SecureSection";
import HeroBannerAi from "@/components/hero-banner/hero-banner-ai";





const businessesData = [
  {
    text: "We help businesses",
    image:
      "https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png",
  },
  {
    text: "to innovate and",
    image:
      "https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png",
  },
];

export default function Home() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.APP_URL}/secure-plugin/v1/home`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };



    fetchData();
  }, []);

  // useEffect(() => {
  //   // Add class to body only if it's the homepage
  //   console.log(router , 'hence')
  //   if (router.pathname === '/') {
  //     document.body.classList.add('homepage-class');
  //   } else {
  //     document.body.classList.remove('homepage-class');
  //   }

  //   // Clean up the class when the component unmounts or the route changes
  //   return () => {
  //     document.body.classList.remove('homepage-class');
  //   };
  // }, [router.pathname]);

  return (
    <>
      <PreLoader />

      <div className="cd-index cd-main-content homepage">
        <div
          id="clapat-page-content"
          className="dark-content"
          data-bgcolor="#ebebeb"
        >
          {/* <AnimationHeader /> */}
          <div id="content-scroll">
            <div id="main">
              {/* <HeroSection data={data?.featured_section_heading} /> */}
              <HeroBannerAi />
              <RealEstateSection />
              {/* <WebDevelopment /> */}
             

              {/* <BrandOne /> */}
           

              <div id="main-content">
                <div id="main-page-content">
                  <div id="itemsWrapperLinks">
                    <div id="itemsWrapper" className="webgl-fitthumbs fx-one relative">
          
                      <PainSection />
   
                      
                      {/* <!-- Row --> */}
                      <div
                        className="content-row full text-align-center dark-section d-mb-none"
                        data-bgcolor="#EBEBEB"
                      >
                        <div className="projects-list-wrapper invert-header-color">
                          <ul className="projects-list-captions">
                            <li data-centerline="OPEN">
                              <Link
                                className="list-link"
                                data-type="page-transition"
                                href="project04.html"
                              ></Link>
                              <span className="onest_display">Artificial Intelligence</span>
                            </li>
                            <li data-centerline="OPEN">
                              <Link
                                className="list-link"
                                data-type="page-transition"
                                href="project05.html"
                              ></Link>
                              <span>Blockchain Solution</span>
                            </li>
                            <li data-centerline="OPEN">
                              <Link
                                className="list-link"
                                data-type="page-transition"
                                href="project06.html"
                              ></Link>
                              <span>Network Solutions</span>
                            </li>
                            <li data-centerline="OPEN">
                              <Link
                                className="list-link"
                                data-type="page-transition"
                                href="project07.html"
                              ></Link>
                              <span>Cybersecurity</span>
                            </li>
                            <li data-centerline="OPEN">
                              <Link
                                className="list-link"
                                data-type="page-transition"
                                href="project08.html"
                              ></Link>
                              <span>Data & Analytics</span>
                            </li>
                            <li data-centerline="OPEN">
                              <Link
                                className="list-link"
                                data-type="page-transition"
                                href="project09.html"
                              ></Link>
                              <span>SEO & Marketing</span>
                            </li>
                          </ul>
                          
                          <ul className="projects-list-images">
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src="/images/011hero.jpg"
                                    className="item-image grid__item-img"
                                    alt="011hero"
                                    width={1920}
                                    height={587}
                                  />
                                  <div className="hero-video-wrapper"></div>
                                </div>
                                <Image
                                  src="/images/011hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt="011hero"
                                  width={1920}
                                  height={587}
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src="/images/012hero.jpg"
                                    className="item-image grid__item-img"
                                    alt="012hero"
                                    width={1920}
                                    height={587}
                                  />
                                </div>
                                <Image
                                  src="/images/012hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt="012hero"
                                  width={1920}
                                  height={587}
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src="/images/013hero.jpg"
                                    className="item-image grid__item-img"
                                    alt="013hero"
                                    width={1920}
                                    height={587}
                                  />
                                </div>
                                <Image
                                  src="/images/013hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt="013hero"
                                  width={1920}
                                  height={587}
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src="/images/014hero.png"
                                    className="item-image grid__item-img"
                                    alt="014image"
                                    width={1920}
                                    height={587}
                                  />
                                </div>
                                <Image
                                  src="/images/014hero.png"
                                  className="grid__item-img grid__item-img--large"
                                  alt="014image"
                                  width={1920}
                                  height={587}
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src="/images/015hero.jpg"
                                    className="item-image grid__item-img"
                                    alt="015hero"
                                    width={1920}
                                    height={587}
                                  />
                                </div>
                                <Image
                                  src="/images/015hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt="015hero"
                                  width={1920}
                                  height={587}
                                />
                              </div>
                            </li>
                            <li className="trigger-item">
                              <div className="img-mask">
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src="/images/016hero.jpg"
                                    className="item-image grid__item-img"
                                    alt="016hero"
                                    width={1920}
                                    height={587}
                                  />
                                </div>
                                <Image
                                  src="/images/016hero.jpg"
                                  className="grid__item-img grid__item-img--large"
                                  alt="016hero"
                                  width={1920}
                                  height={587}
                                />
                              </div>
                            </li>
                            <li className="pixels-cover"></li>
                          </ul>
                        </div>
                      </div>
                      {/* <!--/Row --> */}

                
                
                    </div>
                  </div>
                </div>
              </div>

              <div className="awardsSec pt-10" >
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
                    2024 ©{" "}
                    <Link
                      className="link"
                      target="_blank"
                      href="https://www.clapat.com/"
                    >
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
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
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
        </div>
      </div>

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
