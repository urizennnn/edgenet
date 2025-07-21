"use client"

import { useEffect } from "react"

const criticalImages = ["/images/edgenet-logo-icon.png", "/images/edgenet-logo-full.png"]

export function ImagePreloader() {
  useEffect(() => {
    // Preload critical images
    criticalImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })

    // Preload hero background image
    const heroImage = new Image()
    heroImage.src = "/placeholder.svg?height=1080&width=1920&text=SaaS+Technology+Background"

    return () => {
      // Cleanup preload links
      criticalImages.forEach((src) => {
        const existingLink = document.querySelector(`link[href="${src}"]`)
        if (existingLink) {
          document.head.removeChild(existingLink)
        }
      })
    }
  }, [])

  return null
}
