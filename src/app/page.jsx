'use client';
import HeroSectionMain from '@/components/hero-banner/HeroSectionMain';
import RealEstateSection from '@/components/about/about-six';
import PainSection from '@/components/what-us-diff/whatusdiff';
import { AnimatedPinDemo } from '@/components/ui/AnimatedPinDemo';
import AwardOne from '@/components/award/award-one';
import ProjectTextLine from '@/components/project/project-text-line';
import TeamOne from '@/components/team/team-one';
import TestimonialOne from '@/components/testimonial/testimonial-one';
import { BlogSection } from '@/components/new-blog/BlogSection';
import FooterFour from '@/layouts/footers/footer-four';
import SecureSection from '@/components/whysecure/SecureSection';
import ProjectSix from '@/components/project/project-six';
import ClientWrapper from '@/components/ClientWrapper';
// import GalaxyBackground from '@/components/project/galaxy-background';
import ProjectSeven from '@/components/project/project-seven';
import ContactOne from '@/components/contact/contact-one';
import ContactTwo from '@/components/contact/contact-two';
import BlogOne from '@/components/blog/blog-one';

// import Main from '@/components/astronaut/Main';
// import BeamsBackground from '@/components/project/project-eight';

export default function Home() {
  return (
    <ClientWrapper>
      {(data) => (
        <>
          <div id="content-scroll">
            <div id="main">
              {/* <Main /> */}
              <HeroSectionMain />
              <RealEstateSection />
              <SecureSection />
              <PainSection />
              {/* <AnimatedPinDemo /> */}

              <div className="awardsSec">
                <AwardOne data={data} />
                {/* <BeamsBackground data={data} /> */}
              </div>
            </div>

            {/* Footer */}
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
                    <a className="link" target="_blank" href="https://www.clapat.com/">
                      ClaPat
                    </a>
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
                      <a href="https://www.dribbble.com/clapat" target="_blank">
                        Db
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/clapatdesign" target="_blank">
                        Tx
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/clapat" target="_blank">
                        Be
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/clapat.ro" target="_blank">
                        Fb
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/clapat.themes/" target="_blank">
                        In
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>

          <main>
            {/* <ProjectSix /> */}
            <ProjectSeven />

            {/* <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <ProjectTextLine data={data} />
                </div>
              </div>
            </div>

            <TeamOne data={data} /> */}
            {/* <TestimonialOne data={data} /> */}
            <div className="awardsSec">
              <BlogOne />
              {/*               <BlogSection /> */}
            </div>

            <div>
              <ContactTwo />
            </div>
          </main>
          {/* <GalaxyBackground /> */}

          <FooterFour />

          {/* Additional HTML */}
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
      )}
    </ClientWrapper>
  );
}
