"use client"

import { useState, useEffect } from "react"

interface HeroBackgroundProps {
  videoId?: string
  fallbackImage?: string
}

export function HeroBackground({
  videoId = "UNMkLHzofQI",
  fallbackImage = "/placeholder.svg?height=1080&width=1920&text=SaaS+Technology",
}: HeroBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    // Delay video loading to improve initial page load
    const timer = setTimeout(() => {
      setShouldLoadVideo(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Optimized Fallback Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${fallbackImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px) brightness(0.3)",
          opacity: isVideoLoaded ? 0 : 1,
        }}
      />

      {/* Optimized Video Background */}
      {shouldLoadVideo && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&start=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&origin=${typeof window !== "undefined" ? window.location.origin : ""}`}
          title="SaaS Technology Background"
          className="w-full h-full object-cover scale-110 transition-opacity duration-1000"
          allow="autoplay; encrypted-media"
          loading="lazy"
          onLoad={() => setIsVideoLoaded(true)}
          style={{
            pointerEvents: "none",
            filter: "blur(5px) brightness(0.25) contrast(1.1) saturate(0.8)",
            transform: "scale(1.15)",
            minWidth: "100vw",
            minHeight: "100vh",
            opacity: isVideoLoaded ? 1 : 0,
          }}
        />
      )}
    </div>
  )
}
