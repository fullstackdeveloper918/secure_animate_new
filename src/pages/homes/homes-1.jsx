"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import PreLoad from "@/components/PreLoad/PreLoad";
import ZoomEffect from "@/components/ZoomEffect/ZoomEffect";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import ServiceOne from "@/components/service/service-one";
import ProjectFour from "@/components/project/project-four";
import AwardOne from "@/components/award/award-one";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import FooterOne from "@/layouts/footers/footer-one";

import shape_1 from "@/assets/img/home-01/footer/footer-circle-shape-1.png";
import shape_2 from "@/assets/img/home-01/footer/footer-circle-shape-2.png";

import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";

import CounterOne from "@/components/counter/counter-one";
import ProjectTextLine from "@/components/project/project-text-line";
import AwardTwo from "@/components/award/award-two";
import { awardAnimOne } from "@/utils/award-anim";
import { ShowcasePortfolio } from "@/utils/showcase";
import { instagramAnim } from "@/utils/instagram-anim";
import ProjectOne from "@/components/project/project-one";
import VideOne from "@/video/video-one";
import BrandOne from "@/components/brand/brand-one";
import ScrollBanner from "@/components/ScrollBanner";
import ProjectSix from "@/components/project/project-six";
import FooterTwo from "@/layouts/footers/footer-two";
import FooterThree from "@/layouts/footers/footer-three";
import FooterFive from "@/layouts/footers/footer-five";
import FooterFour from "@/layouts/footers/footer-four";
import FooterSix from "@/layouts/footers/footer-six";
import TeamTwo from "@/components/team/team-two";
import BlogClassicSlider from "@/components/blog/slider/blog-classic-slider";
import BlogOne from "@/components/blog/blog-one";

const HomeMain = () => {
  const comp = useRef(null);

  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();

      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });

      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
      ShowcasePortfolio();
      awardAnimOne();
      charAnimation();
      instagramAnim();
      titleAnimation();
      projectThreeAnimation();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Wrapper showBackToTop={false}>
        <div id="magic-cursor">
          <div id="ball"></div>
        </div>

        {/* <PreLoad /> */}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <HeaderOne />
              <HeroBannerOne />
              <ProjectSix />
              {/* <ScrollBanner /> */}
              {/* <VideOne /> */}

              <BrandOne />

              <section className="challange_sec">
                <div className="container">
                <h2>
                  We empower businesses ▪ to leverage cutting-edge technology
                  and ▪ stay ahead in a rapidly evolving digital landscape by
                  delivering ▪ innovative IT solutions.
                </h2>
             
                <div className="challangeDiv">
                <div className="main_content">
                </div>
                  <div className="main_content">
                    <h5>The Challenge</h5>
                    <p>Modern businesses face complex challenges in integrating advanced IT solutions, often struggling with outdated systems and evolving technological demands. Our mission is to bridge this gap with innovative, scalable, and efficient IT services.</p>
                    <Link href="#"> About Us<span className="svgIcon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><title></title><g data-name="Layer 2" id="Layer_2"><path d="M23.05,22a1,1,0,0,0-1.41,0L17,26.56V3a1,1,0,1,0-2,0V26.53L10.47,22a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l6.37,6.37a.9.9,0,0,0,1.27,0l6.36-6.37A1,1,0,0,0,23.05,22Z"></path></g></svg>
                      </span></Link>
                  </div>
                  
                </div>
                </div>
              </section>
              <section className="animationContent">
                <h2> What Makes Us Different?</h2>
              </section>

              <ServiceOne />

              {/* <ProjectOne /> */}

              <AwardOne />

              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-xl-12">
                    <ProjectTextLine />
                  </div>
                </div>
              </div>

              {/* <CounterOne /> */}

              <TeamOne />

              <TestimonialOne />
              <BlogOne />
              {/* <BlogItem /> */}
              

            </main>

            {/* <FooterOne /> */}
            {/* <FooterTwo />
            <FooterThree /> */}
            {/* <FooterFive /> */}
            <FooterFour />
            {/* <FooterSix /> */}
          </div>
        </div>

        <div className="tp-footer-shape-wrap z-index-5 smooth">
          <Link href="#">
            <div className="tp-footer-shape p-relative">
              <Image className="img-1" src={shape_1} alt="shape" />
              <Image className="img-2" src={shape_2} alt="shape" />
              <span></span>
            </div>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default HomeMain;
