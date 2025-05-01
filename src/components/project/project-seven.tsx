"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "INNOVATION",
    description: "Pushing boundaries with cutting-edge technology",
    image: "/images/01hero05.png?height=600&width=800",
  },
  {
    id: 2,
    title: "PERFORMANCE",
    description: "Delivering exceptional results every time",
    image: "/images/01hero03.png?height=600&width=800",
  },
  {
    id: 3,
    title: "EXCELLENCE",
    description: "Setting new standards in the industry",
    image: "/images/01hero04.png?height=600&width=800",
  },
]

export default function ProjectSeven() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isShattered, setIsShattered] = useState(false)
  const [hasShattered, setHasShattered] = useState(false) // Track if shattered once
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleImageHover = () => {
    if (!hasShattered) {
      setIsShattered(true)
      setHasShattered(true)
      setTimeout(() => {
        setIsShattered(false)
      }, 120)
    }
  }

  useEffect(() => {
    setIsShattered(false)
    setHasShattered(false) // Reset on slide change
  }, [currentSlide])

  const setImageRef = (index: number) => (el: HTMLDivElement | null) => {
    imageRefs.current[index] = el
  }
  
  return (
    <section
      id="slider-section"
      className="relative min-h-screen flex items-center justify-center   transition-opacity duration-500"
    >
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
        <h1 className="text-[20vw] font-bold text-white opacity-5 transition-all duration-700 transform">
          {slides[currentSlide].title}
        </h1>
      </div>

      {/* Slider Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col items-center">
          {/* Image with shatter effect */}
          <div className="relative w-full max-w-4xl h-[60vh] mb-8">
            {isShattered ? (
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => {
                  const randomDelay = Math.random() * 0.5
                  const randomTranslate = `${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px`
                  const randomRotate = `${(Math.random() - 0.5) * 10}deg`

                  return (
                    <div
                      key={i}
                      ref={setImageRef(i)}

                      className="relative overflow-hidden transition-all duration-300"
                      style={{
                        transform: `translate(${randomTranslate}) rotate(${randomRotate})`,
                        transitionDelay: `${randomDelay}s`,
                        opacity: 0.9 - randomDelay * 0.5,
                      }}
                    >
                      <Image
                        src={slides[currentSlide].image || "/01hero05.png"}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: `${(i % 4) * 33.33}% ${Math.floor(i / 4) * 33.33}%`,
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="relative w-full h-full" onMouseEnter={handleImageHover}>
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="text-center mb-12 transition-all duration-500 transform">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">{slides[currentSlide].description}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          {/* <div className="discoverBtn">
          <a href="/projects/" className="btn group/button btn--large btn--dark" data-v-553cc85a="" data-v-727bddb5=""><span className="relative inline-block group-hover/button:-translate-y-4 group-hover/button:opacity-0 group-hover/button:scale-x-75" data-v-553cc85a="">
            Discover all projects
          </span> <span aria-hidden="true" className="pointer-events-none absolute inset-0 inline-block p-[inherit] opacity-0 translate-y-2 scale-x-125 group-hover/button:translate-y-0 group-hover/button:scale-x-100 group-hover/button:opacity-100" data-v-553cc85a="">
            Discover all projects
          </span></a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
