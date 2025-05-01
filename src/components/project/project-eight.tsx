"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // motion/react → framer-motion
import { cn } from "@/utils/home-utils";
import Link from "next/link";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  text: string;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}



function generateBubbles(canvas: HTMLCanvasElement, radius: number): Bubble[] {
  const bubbles: Bubble[] = [];
  const spacing = radius * 2.5;
  const rows = Math.floor(canvas.height / spacing);
  const cols = Math.floor(canvas.width / spacing);
  let textIndex = 0;

 
  

  return bubbles;
}

interface BeamsBackgroundProps {
  cls?: string;
  abStyle?: boolean;
  data?: any;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export default function BeamsBackground({
  cls = 'pt-md-125 pb-md-125 pt-50 pb-50',
  abStyle = false,
  data,
  className = '',
  intensity = "subtle"
}: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationFrameRef = useRef<number>(0);
  const MINIMUM_BEAMS = 20;
  const bubbleRadius = 70;
  const [activeThumb, setActiveThumb] = useState(1);

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      beamsRef.current = Array.from({ length: MINIMUM_BEAMS * 1.5 }, () =>
        createBeam(canvas.width, canvas.height)
      );

      bubblesRef.current = generateBubbles(canvas, bubbleRadius);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function resetBeam(beam: Beam, index: number, total: number) {
      if (!canvas) return beam;
      const column = index % 3;
      const spacing = canvas.width / 3;
      beam.y = canvas.height + 100;
      beam.x =
        column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = 190 + (index * 70) / total;
      beam.opacity = 0.2 + Math.random() * 0.1;
      return beam;
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);
      const pulsingOpacity =
        beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
      gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
      gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
      gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function drawBubble(ctx: CanvasRenderingContext2D, bubble: Bubble) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = "white";
      ctx.font = "16px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(bubble.text, bubble.x, bubble.y);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(35px)";
      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) {
          resetBeam(beam, i, beamsRef.current.length);
        }
        drawBeam(ctx, beam);
      });

      ctx.filter = "none";
      bubblesRef.current.forEach((bubble) => {
        drawBubble(ctx, bubble);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [intensity]);

  const services = [
    { id: 1, title: 'Server & Cloud Management', link: '/service/serversetupconfiguration' },
    { id: 2, title: 'Cybersecurity Solutions Service', link: '/service/threatdetection' },
    { id: 3, title: 'Support Service', link: '/service/technicalsupport' },
    { id: 4, title: 'Business SEO & Digital Visibility', link: '/service/keywordoptimization' },
    { id: 5, title: 'Content Creation & Marketing Services', link: '/service/contentwriting' },
    { id: 6, title: 'Inventory Management Solutions', link: '/service/inventorytracking' },
    { id: 7, title: 'UX/UI Design & Website Development', link: '/service/userinterfacedesign' },
    { id: 8, title: 'IT Detective Services & Scam Recovery', link: '/service/fraudinvestigation' },
    { id: 9, title: 'Secure Payments & Fraud Detection', link: '/service/paymentgatewayintegration' },
  ];

  return (
    <div className={cn("relative w-full overflow-hidden bg-neutral-950", className)}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className={`tp-award-area ${cls}`}>
        <div className="container-1630 mx-auto">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="tp-award-title-box">
                <span className="aboutIcon">
                  <svg
                    data-v-669b4a84=""
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      data-v-669b4a84=""
                      d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                      fill="currentColor"
                      width="20"
                      height="20"
                    ></path>
                  </svg>
                  <span>{data?.home_advanced_it_and_cyber_security_first_heading}</span>
                </span>
                <h4 className="tp-section-title">
                  {data?.home_advanced_it_and_cyber_security_second} <br />
                  {data?.home_advanced_it_and_cyber_security_third}
                  <br /> <span> {data?.home_advanced_it_and_cyber_security_fourth}</span>
                </h4>
                <p className="awardsContent">{data?.home_advanced_it_and_cyber_security_paragraph}</p>
                <div className="btn_sec flex gap-3 flex-wrap">
                  {/* <Link href="/contact" className="BtnOne btnWrapper">
                      Get started
                      </Link> */}
  
                  <Link href="/contact-us" className="BtnTwo btnWrapper">
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
                  {/* </button> */}
                </div>
              </div>
            </div>
  
            {/* <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="tp-award-list-wrap"> */}
  
  
            {/* {data &&
                  data?.home_page_service_section_loop_data?.map((item, index) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveThumb(item.id)}
                      className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                      rel={`tp-award-list-thumb-${item.id}`}
                    >
                      <div className="tp-award-list-content-left d-flex align-items-center">
                        <span>{index > 9 ? '0' + index + 1 : index + 1}</span>
                        <p>{item?.home_page_service_section_loop}</p>
                      </div>
                      <div className="tp-award-list-content-right">
                        <span>See More</span>
                      </div>
                    </div>
                  ))} */}
            {/* </div> */}
            {/* </div> */}
  
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="tp-award-list-wrap">
                {services.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveThumb(item.id)}
                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                    rel={`tp-award-list-thumb-${item.id}`}
                  >
                    <div className="tp-award-list-content-left d-flex align-items-center">
                      <a href={item.link}>{item.title}</a>
                    </div>
                    <div className="tp-award-list-content-right">
                      <a href={item.link}>See More</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  );
}
