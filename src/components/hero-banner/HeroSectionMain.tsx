'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { ChevronRight, Shield, Rocket, Video } from 'lucide-react';
import Link from 'next/link';
// import bannerobert from "../../../public/images/bannerobert.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  // Use a more efficient way to handle scroll animations
  // by reducing the number of transform calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Optimize parallax effects by using simpler transforms
  // and reducing the number of dependencies
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Simplify animations to improve performance
  useEffect(() => {
    controls.start({
      y: [0, 15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-space-gradient "
      id="hero"
      style={{
        willChange: 'transform', // Hint to browser for optimization
        contain: 'layout paint size', // Improve rendering performance
      }}
    >
<video autoPlay muted loop className="banner-video" style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
  <source src="/banner-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      {/* Stars background - using CSS background for better performance */}
      <div
        className="absolute inset-0 z-0 bg-stars"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />


      {/* Waving astronaut - optimized animation */}
      <motion.div
        className="absolute w-[350px] h-[350px] z-20 astronuts"
        animate={controls}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* <Astronaut /> */}
      </motion.div>

      {/* Content - using simpler transforms */}
      <div className="container mx-auto relative z-[9999] bannercontent">
        <motion.div
          className="main_banner px-7"
          style={{
            y: textY,
            opacity: textOpacity,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border bgtrans ">
              <Shield className="w-4 h-4 mr-2" /> Secure365 Cybersecurity
            </span>
          </motion.div> */}

          <motion.h1
            className="text-[12vw] leading-[13vw] sm:leading-[5xl]  md:leading-[6xl] sm:text-3xl md:text-6xl xl:text-5xl 2xl:text-8xl mb-6 text-left "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-white block">
            Secure  
            </span>
            <span className=" colorblue">This Galaxy </span>
            <br />
            <span className="bg-clip-text text-transparent ">And Beyond</span>
          </motion.h1>

          <motion.p
            className="text-md xl:text-md 2xl:text-xl text-purple-100 mb-6 xl:mb-12 max-w-2xl text-left mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From Web Development to Cybersecurity: Chart Your Course with Secure365 and become the
            hero of your digital universe.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button className="relative z-[9999]">
              <Link
                href="/contact-us"
                id="btnTwo"
                className="BtnTwo btnWrapper rounded-[50px] text-white px-6 py-3 flex items-center justify-center"
              >
                Start Your Mission <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </button>

          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040720] to-transparent z-1"></div>
    </section>
  );
}



