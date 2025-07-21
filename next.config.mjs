/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization
    formats: ["image/webp", "image/avif"],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Allowed domains for external images
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "picsum.photos",
      "img.youtube.com",
    ],

    // Remote patterns for more flexible image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.placeholder.com",
      },
    ],

    // Cache TTL (1 year)
    minimumCacheTTL: 31536000,

    // Enable SVG support
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Disable built‑in optimization when you need raw URLs
    unoptimized: true,
  },

  // Enable compression
  compress: true,

  // Optimize bundle imports
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Custom headers for caching
  async headers() {
    return [
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
