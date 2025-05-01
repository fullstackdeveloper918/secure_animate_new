"use client"

import { useEffect, useRef } from "react"

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: Star[] = []
    const numStars = 200

    interface Star {
      x: number
      y: number
      radius: number
      color: string
      velocity: number
      alpha: number
      direction: number
    }

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 1.5
      const hue = Math.floor(Math.random() * 60) + 200 // Blue to purple range
      const color = `hsl(${hue}, 100%, 70%)`
      const velocity = Math.random() * 0.05 + 0.02
      const alpha = Math.random() * 0.5 + 0.5
      const direction = Math.random() * Math.PI * 2

      stars.push({ x, y, radius, color, velocity, alpha, direction })
    }

    // Create nebula clouds
    const nebulaClouds: NebulaCloud[] = []
    const numClouds = 5

    interface NebulaCloud {
      x: number
      y: number
      radius: number
      color: string
      alpha: number
      velocity: number
    }

    for (let i = 0; i < numClouds; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 150 + 100
      const hue = Math.floor(Math.random() * 60) + 200 // Blue to purple range
      const color = `hsl(${hue}, 100%, 50%)`
      const alpha = Math.random() * 0.05 + 0.02
      const velocity = Math.random() * 0.1 + 0.05

      nebulaClouds.push({ x, y, radius, color, alpha, velocity })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebula clouds
      nebulaClouds.forEach((cloud) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.radius)
        gradient.addColorStop(0, `${cloud.color.replace(")", `, ${cloud.alpha})`)}`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2)
        ctx.fill()

        // Move clouds
        cloud.x += Math.cos(Date.now() * 0.0001) * cloud.velocity
        cloud.y += Math.sin(Date.now() * 0.0001) * cloud.velocity

        // Wrap around edges
        if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius
        if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius
      })

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color.replace(")", `, ${star.alpha})`)
        ctx.fill()

        // Twinkle effect
        star.alpha += Math.sin(Date.now() * 0.005) * 0.01
        star.alpha = Math.max(0.3, Math.min(1, star.alpha))

        // Move stars
        star.x += Math.cos(star.direction) * star.velocity
        star.y += Math.sin(star.direction) * star.velocity

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ background: "linear-gradient(to bottom, #000000, #050520)" }}
    />
  )
}
