import { gsap, Power2 } from 'gsap';
import $ from 'jquery';
import { SplitText } from '@/plugins';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hero Title Animation
export function heroTitleAnim() {
  const heroArea = document.querySelector('.tp-hero-2-area');
  if (heroArea) {
    gsap.set('.tp-hero-2-title.text-1', { x: 300 });
    gsap.to('.tp-hero-2-title.text-1', {
      scrollTrigger: {
        trigger: heroArea,
        start: 'top center',
        markers: false,
      },
      duration: 1.7,
      x: 0,
    });

    gsap.set('.tp-hero-2-title.text-2', { x: -300 });
    gsap.to('.tp-hero-2-title.text-2', {
      scrollTrigger: {
        trigger: heroArea,
        start: 'top center',
        markers: false,
      },
      duration: 1.7,
      x: 0,
    });

    gsap.set('.tp-hero-2-content', { x: -500 });
    gsap.to('.tp-hero-2-content', {
      scrollTrigger: {
        trigger: heroArea,
        start: 'top center',
        markers: false,
      },
      duration: 2,
      x: 0,
    });
  }
}

// Hero Background Animation
export function heroBgAnimation() {
  const heroBg = document.querySelector('.tp-hero-bg-single');
  if (heroBg) {
    gsap.from(heroBg, {
      scale: 1.3,
      duration: 1.5,
    });
  }
}

// Bounce Button Animation
export function bounceAnimation() {
  const bounce = document.querySelectorAll('.tp-btn-bounce');
  if (bounce.length > 0) {
    let mybtn = gsap.utils.toArray(bounce);
    mybtn.forEach((btn: any) => {
      const $this = $(btn);
      gsap.fromTo(
        btn,
        { y: -100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: $this.closest('.tp-btn-trigger'),
            start: 'top center',
            markers: false,
          },
          duration: 1,
          ease: 'bounce.out',
          y: 0,
          opacity: 1,
        }
      );

      gsap.fromTo(
        btn,
        { y: -100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: $this.closest('.tp-btn-trigger'),
            start: 'bottom bottom',
            markers: false,
          },
          duration: 0.9,
          delay: 4,
          ease: 'bounce.out',
          y: 0,
          opacity: 1,
        }
      );
    });
  }
}

// Character Animation
export function charAnimation() {
  let char_come = gsap.utils.toArray('.tp-char-animation');
  char_come.forEach((splitTextLine: any) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none',
      },
    });

    const itemSplitted = new SplitText(splitTextLine, {
      type: 'chars, words',
    });

    gsap.set(splitTextLine, { perspective: 300 });
    itemSplitted.split({ type: 'chars, words' });

    tl.from(itemSplitted.chars, {
      duration: 1,
      delay: 0.5,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  });
}

// Fade Animations
export function fadeAnimation() {
  const directions = [
    { selector: '.tp_fade_bottom', prop: 'y', value: 300 },
    { selector: '.tp_fade_top', prop: 'y', value: -100 },
    { selector: '.tp_fade_left', prop: 'x', value: -100 },
    { selector: '.tp_fade_right', prop: 'x', value: 100 },
  ];

  directions.forEach(({ selector, prop, value }) => {
    const elems = gsap.utils.toArray(selector);
    if (elems.length > 0) {
      gsap.set(selector, { [prop]: value, opacity: 0 });
      elems.forEach((item: any) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
          },
        }).to(item, {
          [prop]: 0,
          opacity: 1,
          ease: Power2.easeOut,
          duration: 2.5,
        });
      });
    }
  });

  // Fade based on data attributes
  if ($('.tp_fade_anim').length > 0) {
    const fadeArray = gsap.utils.toArray('.tp_fade_anim');
    fadeArray.forEach((el: HTMLElement) => {
      const offset = parseInt(el.getAttribute('data-fade-offset') || '50', 10);
      const duration = parseFloat(el.getAttribute('data-duration') || '1');
      const fadeFrom = el.getAttribute('data-fade-from') || 'bottom';
      const delay = parseFloat(el.getAttribute('data-delay') || '0.5');
      const ease = el.getAttribute('data-ease') || 'power2.out';
      const animate = el.getAttribute('data-on-scroll') === '1';

      if (!animate) return;

      const animProps: Record<string, any> = {
        opacity: 0,
        ease,
        duration,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 110%',
        },
      };

      switch (fadeFrom) {
        case 'top':
          animProps.y = -offset;
          break;
        case 'bottom':
          animProps.y = offset;
          break;
        case 'left':
          animProps.x = -offset;
          break;
        case 'right':
          animProps.x = offset;
          break;
      }

      gsap.from(el, animProps);
    });
  }
}
