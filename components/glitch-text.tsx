"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  children: React.ReactNode
  interval?: number
  intensity?: number
}

export default function GlitchText({ children, interval = 2000, intensity = 0.1 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)

      setTimeout(() => {
        setIsGlitching(false)
      }, 150)
    }, interval)

    return () => clearInterval(glitchInterval)
  }, [interval])

  return (
    <span className="relative inline-block">
      <span
        className={`relative ${isGlitching ? "text-pink-500" : ""}`}
        style={{
          textShadow: isGlitching
            ? `${Math.random() * intensity - intensity / 2}em ${Math.random() * intensity - intensity / 2}em 0.02em rgba(0, 255, 255, 0.75),
               ${Math.random() * intensity - intensity / 2}em ${Math.random() * intensity - intensity / 2}em 0.02em rgba(255, 0, 255, 0.75)`
            : "none",
          left: isGlitching ? `${Math.random() * intensity * 10 - intensity * 5}px` : "0",
          top: isGlitching ? `${Math.random() * intensity * 5 - intensity * 2.5}px` : "0",
          transition: "none",
        }}
      >
        {children}
      </span>
    </span>
  )
}
