'use-client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Layers, Users, Lock } from 'lucide-react';
import whatusImage3 from '../../../public/images/1.svg';
import Image from 'next/image';
import whatusImage4 from '../../../public/images/4.svg';
import whatusImage5 from '../../../public/images/5.svg';
import CardSpotlightDemo from '@/components/ui/cardSpotlight/CardSpotlightDemo.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

function PainSection() {
  const firstSectionRef = useRef(null);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const { scrollYProgress: firstSectionProgress } = useScroll({
    target: firstSectionRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const smoothProgress = useSpring(firstSectionProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const gapSpacing = useTransform(smoothProgress, [0, 1], [250, 20]);

  const fontSize = useTransform(smoothProgress, [0.3, 0.7], ['3vw', '1000vw']);
  const scale = useTransform(smoothProgress, [0.2, 0.5], [1, 1.8]);
  const backgroundColor = useTransform(smoothProgress, [0.4, 0.5], ['#FFFFFF', '#000000']);

  useEffect(() => {
    return smoothProgress.on('change', (value) => {
      setShowSecondSection(value >= 0.5);
    });
  }, [smoothProgress]);

  const cards = [
    {
      icon: whatusImage3,
      title: 'Information Security Solutions',
      description:
        'Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.',
    },
    {
      icon: whatusImage4,
      title: 'Comprehensive Solutions',
      description:
        'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.',
    },
    {
      icon: whatusImage5,
      title: 'Victim Approach',
      description:
        'Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.',
    },
    {
      icon: whatusImage4,
      title: 'Advanced Protection',
      description:
        'Secure365 provides innovative approaches to combat cyber threats, ensuring the highest security standards.',
    },
  ];

  // ✅ Duplicate cards for infinite loop
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    return gapSpacing.on('change', (value) => {
      setIsFixed(value >= 120); // ✅ Convert MotionValue to state
    });
  }, [gapSpacing]);

  console.log('fixed', isFixed);

  return (
    <div className="relative " data-aos="fade-right">
      <div ref={firstSectionRef} className="mainCoantinersec">
        <motion.section
          style={{ backgroundColor }}
          className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.h2
            style={{ fontSize, scale }}
            className="text-center font-bold px-4 transition-colors duration-300 whitespace-nowrap"
          >
            What Makes Us Different?
          </motion.h2>
        </motion.section>
      </div>

      {showSecondSection && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[576px] inset-0 flex flex-col items-center justify-center bg-black text-white md:p-10 blacksec p-2 overflow-hidden"
        >
          <motion.h2
            className=" text-white font-bold text-center z-10 xl:mb-5 md:mb-12 mb-10 xxl:text-7xl xl:text-5xl text-3xl "
            data-aos="fade-down"
          >
            What Makes Us Different?
          </motion.h2>
          <div className="w-full sliderSec">
            {/* // style={{ marginTop: gapSpacing }}> */}
            {/* {duplicatedCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[400px] h-96 bg-black border border-white/20 backdrop-blur-sm rounded-2xl p-8 transition-colors duration-300 slidecol"
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-6">
                      <Image src={card.icon} width={60} height={60} />
                    </div>
                    <h3 className="text-white md:mb-4  mb-2 cardtitile">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 cardDecription">
                      {card.description}
                    </p>
                  </motion.div>
                ))} */}
            <CardSpotlightDemo />
            <div className="w-full mx-auto flex justify-center">
              <Link href="/contact-us" className="BtnTwo btnWrapper w-44">
                Let's Connect
                <span>
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.35008 3.5972C8.46253 3.25663 8.2776 2.8894 7.93704 2.77695L2.38722 0.944577C2.04665 0.832133 1.67942 1.01706 1.56697 1.35763C1.45453 1.69819 1.63946 2.06543 1.98002 2.17787L6.91319 3.80665L5.28441 8.73982C5.17197 9.08039 5.3569 9.44762 5.69746 9.56006C6.03803 9.67251 6.40526 9.48758 6.51771 9.14702L8.35008 3.5972ZM1.06551 7.47844L8.02551 3.9736L7.44137 2.8136L0.481368 6.31844L1.06551 7.47844Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            {/* </motion.div> */}
          </div>
        </motion.section>
      )}
    </div>
  );
}

export default PainSection;
