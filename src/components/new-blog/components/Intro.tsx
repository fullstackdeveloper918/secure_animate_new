'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Intro.css';
import Link from 'next/link';
import 'aos/dist/aos.css';

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
  const [newsLink, setNewsLink] = useState<string>('');
  const [loading, setLoading] = useState(true);

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
        setNewsLink(data.link);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  useEffect(() => {
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

            {!loading && newsLink && (
              <div
                className="flex items-center justify-center"
                style={{ marginTop: '43px', marginBottom: '30px' }}
              >
                <Link href={newsLink} className="BtnOne btnWrapper px-12">
                  Read All Articles
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Render Blog Posts */}
        {/* <div className="blog-list-container">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            newsData.map((news) => (
              <div key={news.id} className="blog-card" data-aos="fade-up">
                <img
                  src={news.featured_image}
                  alt={news.title}
                  className="blog-image"
                />
                <h3 className="blog-title">{news.title}</h3>
                <p className="blog-date">{news.date}</p>
                <div
                  className="blog-excerpt"
                  dangerouslySetInnerHTML={{ __html: news.content.slice(0, 150) + '...' }}
                />
                <Link
                  href={news.external_link || news.link}
                  className="read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </div>
            ))
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
