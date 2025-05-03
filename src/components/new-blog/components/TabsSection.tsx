'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import TabContent from './TabContent';
import VideoContent from './VideoContent';
import '../styles/TabsSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const TabsSection: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabContents = [
    {
      title:
        'Reinventing micro-mobility with <span class="text-color-green">Award winning</span> design',
      description:
        'Our mission is to close the gap between a scooter and a bike. Yoda is the lightest vehicle of its category, designed to be agile and fun for everyone to ride.',
      videoSrc:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4',
      webmSrc:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.webm',
      badgeImage:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65b0dc37d226a551affbf2ea_GDA24_HO_WINNER_MC_RGB.webp',
    },
    {
      title:
        'Best in class energy management for <span class="text-color-green">optimal autonomy</span>',
      description:
        '3 riding modes: 🌱 eco, ⚡️ normal & 🚀 boost - that offer up to 80 km range on one single charge with a swappable battery.',
      videoSrc:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4',
      webmSrc:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.webm',
    },
    {
      title: 'Durable and effortless, <span class="text-color-green">all the way</span>',
      description:
        'We spent years crafting Yoda, stripping away unnecessary components to deliver a <strong>simple</strong> and <strong>efficient</strong> mobility experience.',
      videoSrc:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.mp4',
      webmSrc:
        'https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.webm',
    },
  ];

  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [newsLink, setNewsLink] = useState<any>('');
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

  // return;

  useEffect(() => {
    if (sectionRef.current && containerRef.current) {
      // Create a timeline for each tab
      const tabDuration = 1; // Duration for each tab section
      const totalDuration = newsData.length * tabDuration;

      // Pin the section while scrolling through tabs
      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalDuration * 100}%`, // Make the scroll distance proportional to the number of tabs
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate: (self) => {
          // Calculate which tab should be active based on scroll progress
          const progress = self.progress;
          const tabIndex = Math.min(Math.floor(progress * newsData.length), newsData.length - 1);
          setActiveTabIndex(tabIndex);
        },
      });

      return () => {
        // Clean up ScrollTrigger on unmount
        pinTrigger.kill();
      };
    }
  }, [newsData.length]);

  return (
    <section className="section_tabs" ref={sectionRef}>
      <div className="padding-section-large">
        <div className="tabs_container" ref={containerRef}>
          <div className="tabs_component">
            <div className="tabs_left">
              <div className="tabs_left-top">
                {newsData.slice(0, 4).map((content, index) => (
                  <TabContent
                    key={index}
                    title={content.title}
                    description={content.content.split(' ').slice(0, 30).join(' ') + '...'}
                    isActive={activeTabIndex === index}
                    index={index}
                  />
                ))}
                {/* <div className="tabs_left-bottom">
                  <Button text="Order today" onClick={handleOrderClick} />
                </div> */}
              </div>
            </div>
            <div className="tabs_right">
              {newsData.slice(0, 4).map((content, index) => (
                // <img key={index} src={content.featured_image} alt={`Image ${index + 1}`} />
                <VideoContent
                  key={index}
                  videoSrc={content.featured_image}
                  webmSrc={content.title}
                  isActive={activeTabIndex === index}
                  index={index}
                  badgeImage={content.featured_image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
