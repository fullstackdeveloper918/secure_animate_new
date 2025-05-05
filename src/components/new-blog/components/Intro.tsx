'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Intro.css';
// import { Link } from 'lucide-react';
import { blog_home_five } from '@/data/blog-data';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import BlogItemTwo from './blog-item/blog-item-2';
import Link from 'next/link';
interface NewsProps {
  id: number;
  title: string;
  date: string;
  content: string;
  external_link: string;
  featured_image: string;
  link: string;
}

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [newsLink, setNewsLink] = useState<any>('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          'https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/news'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('fetchBlogData', data);
        setNewsData(data.news);
        setNewsLink(data.link); // Ensure API response structure is correct
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false); // Stop loading when fetch is complete
      }
    };
    fetchBlogData();
  }, []);
  console.log('fetchBlogDatasss', newsData);
  // const blog_items = [...blog_home_five];

  useEffect(() => {
    // Pin the intro text section
    if (textRef.current) {
      ScrollTrigger.create({
        trigger: '.intro-wrapper',
        start: 'top top',
        end: 'bottom top',
        pin: textRef.current,
        pinSpacing: false,
      });
    }

    return () => {
      // Clean up ScrollTrigger on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="intro">
        <div className="text-align-center" ref={textRef}>
          <div className="max-width-small align-center">
            <div className="margin-small">
              <h2 className="heading-style-h3" data-aos="fade-down">
                <span className="light-green-underline">Our Blog</span>
              </h2>
            </div>
            <p className="text-size-medium mt-10" data-aos="fade-down">
              Check the best marketing resources and the latest blogs about our company.
            </p>

            {/* <div className="flex items-center" style={{ marginTop: '43px', marginBottom: '30px' }}>
              <Link href={newsLink} className="BtnOne btnWrapper px-12">
                Read All Articles
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
