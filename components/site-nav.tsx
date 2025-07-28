"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"

export default function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-lg border-b border-slate-200/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center space-x-3">
            <OptimizedImage
              src="/images/edgenet-logo-icon.png"
              alt="Edgenet Solutions"
              width={40}
              height={40}
              className={`w-10 h-10 transition-all duration-700 border-0 outline-0 ${
                isScrolled ? "brightness-100" : "brightness-100 invert" 
              }`}
              priority
              quality={90}
              style={{ border: "none", outline: "none", boxShadow: "none" }} 
            />
            <span
              className={`text-xl font-bold transition-all duration-700 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Edgenet Solutions
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`transition-all duration-700 font-medium relative group ${
                isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white drop-shadow-md"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-slate-900" : "bg-white"
                }`}
              ></span>
            </a>
            <a
              href="#services"
              className={`transition-all duration-700 font-medium relative group ${
                isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white drop-shadow-md"
              }`}
            >
              Services
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-slate-900" : "bg-white"
                }`}
              ></span>
            </a>
            <a
              href="#why-choose-us"
              className={`transition-all duration-700 font-medium relative group ${
                isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white drop-shadow-md"
              }`}
            >
              Why Us
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-slate-900" : "bg-white"
                }`}
              ></span>
            </a>
            <a
              href="#contact"
              className={`transition-all duration-700 font-medium relative group ${
                isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white drop-shadow-md"
              }`}
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-slate-900" : "bg-white"
                }`}
              ></span>
            </a>
            <a
              href="/ticket"
              className={`transition-all duration-700 font-medium relative group ${
                isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white drop-shadow-md"
              }`}
            >
              Ticket
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-slate-900" : "bg-white"
                }`}
              ></span>
            </a>
            <a href="#contact">
              <Button
                className={`transition-all duration-700 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold px-6 py-2 ${
                  isScrolled
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "bg-teal-600 hover:bg-teal-700 text-white shadow-2xl"
                }`}
              >
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-all duration-700 ${
                isScrolled
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 border border-white/20"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

