// Image optimization utilities and configurations

export const imageConfig = {
  // CDN configuration for image optimization
  domains: ["images.unsplash.com", "via.placeholder.com", "picsum.photos"],

  // Device-specific image sizes
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

  // Image sizes for responsive images
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  // Supported formats (WebP, AVIF for modern browsers)
  formats: ["image/webp", "image/avif"],

  // Quality settings for different use cases
  quality: {
    thumbnail: 60,
    standard: 85,
    high: 95,
    hero: 90,
  },

  // Placeholder configurations
  placeholder: {
    blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kic6LbRw==",
  },
}

// Generate responsive image sizes string
export function generateSizes(breakpoints: { [key: string]: string }) {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(${breakpoint}) ${size}`)
    .join(", ")
}

// Generate blur data URL for images
export function generateBlurDataURL(width = 8, height = 8): string {
  const canvas = typeof window !== "undefined" ? document.createElement("canvas") : null
  if (!canvas) return imageConfig.placeholder.blur

  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")

  if (!ctx) return imageConfig.placeholder.blur

  // Create a simple gradient blur placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, "#f1f5f9")
  gradient.addColorStop(1, "#e2e8f0")

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL("image/jpeg", 0.1)
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Image caching utilities
export const imageCache = {
  // Set cache headers for images
  setCacheHeaders: () => ({
    "Cache-Control": "public, max-age=31536000, immutable",
    Expires: new Date(Date.now() + 31536000000).toUTCString(),
  }),

  // Service worker cache strategy
  cacheStrategy: "CacheFirst",

  // Cache duration (1 year)
  maxAge: 31536000,
}
