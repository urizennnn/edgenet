import { OptimizedImage } from "@/components/optimized-image" 

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <OptimizedImage // Changed to OptimizedImage
                src="/images/edgenet-logo-icon.png"
                alt="Edgenet Solutions"
                width={32}
                height={32}
                className="w-8 h-8 border-0 outline-0" // Explicitly added border-0 outline-0
                loading="lazy"
                style={{ border: "none", outline: "none", boxShadow: "none" }} // Added boxShadow: "none"
              />
              <span className="text-xl font-bold">Edgenet Solutions</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Innovative software solutions for modern business. Transform your operations with our cutting-edge SaaS
              products and custom development services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SaaS Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/ticket" className="hover:text-white transition-colors">
                  Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© 2025 Edgenet Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

