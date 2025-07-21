import {
  ArrowRight,
  CheckCircle,
  Code,
  Cloud,
  Smartphone,
  Database,
  BarChart3,
  Users,
  Zap,
  Shield,
  Clock,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { CONTACT_EMAIL } from "@/lib/constants"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/edgenet-logo-icon.png"
                alt="Edgenet Solutions"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-slate-900">Edgenet Solutions</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </a>
              <a href="#why-choose-us" className="text-slate-600 hover:text-slate-900 transition-colors">
                Why Us
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&mute=1&controls=0&loop=1&playlist=sQ22pm-xvrE"
              title="Promotional Video"
              className="w-full h-full pointer-events-none"
              allow="autoplay; encrypted-media"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Innovative Software Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Business with <span className="text-teal-600">Cutting-Edge</span> Software
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Bridge the gap between technology and success with our SaaS products and custom software development
                services. We deliver solutions that scale with your ambitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <Image
                  src="/images/edgenet-logo-full.png"
                  alt="Edgenet Solutions"
                  width={600}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">30+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">5+</div>
              <div className="text-slate-600">Years Partnership</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About Edgenet Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Forward-thinking technology company dedicated to empowering businesses through innovative software
              solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Dual Expertise</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We operate across two complementary domains that allow us to serve businesses at every stage of their
                digital journey. Our expertise in both SaaS product development and custom software creation gives us a
                unique perspective.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                This dual approach means we understand both the scalability of standardized solutions and the precision
                required for bespoke development, allowing us to recommend the right approach for each client's specific
                needs and budget.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-slate-700">Experienced developers and designers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-slate-700">Scalable and user-focused solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-slate-700">Measurable business results</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Cloud className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle className="text-lg">SaaS Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Ready-to-deploy cloud solutions for common business challenges
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle className="text-lg">Custom Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Tailored software solutions for unique business requirements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* SaaS Products */}
            <Card className="border-2 border-teal-100">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-teal-600 mr-3" />
                  <CardTitle className="text-2xl">SaaS Products</CardTitle>
                </div>
                <CardDescription className="text-lg">Ready-to-Deploy Cloud Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  Our suite of cloud-based software products are designed to solve common business challenges with
                  proven, scalable solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Project Management Platforms</h4>
                      <p className="text-sm text-slate-600">
                        Streamline workflows, track progress, and enhance team collaboration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">CRM Systems</h4>
                      <p className="text-sm text-slate-600">
                        Manage customer relationships, sales pipelines, and marketing campaigns
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Workflow Automation</h4>
                      <p className="text-sm text-slate-600">
                        Eliminate repetitive tasks and optimize business processes
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Development */}
            <Card className="border-2 border-slate-100">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-slate-600 mr-3" />
                  <CardTitle className="text-2xl">Custom Software Development</CardTitle>
                </div>
                <CardDescription className="text-lg">Tailored Solutions for Unique Challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  When off-the-shelf solutions don't fit, we create software that does. From consultation through
                  deployment and ongoing support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Code className="h-5 w-5 text-slate-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Web Applications</h4>
                      <p className="text-sm text-slate-600">
                        Responsive, scalable web platforms built with modern technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Smartphone className="h-5 w-5 text-slate-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Mobile Apps</h4>
                      <p className="text-sm text-slate-600">
                        Native and cross-platform mobile solutions for iOS and Android
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Database className="h-5 w-5 text-slate-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Enterprise Systems</h4>
                      <p className="text-sm text-slate-600">
                        Complex business systems that integrate with existing infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Edgenet Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our unique approach and proven expertise set us apart in the competitive software development landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Dual Expertise Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our unique combination of SaaS and custom development experience means we can recommend the most
                  cost-effective solution for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>End-to-End Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  From UX/UI design and development to deployment and ongoing support, we're your complete technology
                  partner.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our solutions are battle-tested in real business environments. We solve business problems and drive
                  measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Agile & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Clear communication, regular updates, and collaborative development. You're involved every step of the
                  way.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Whether you're a startup or enterprise, our solutions are built to grow with your business. Start
                  small, scale seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Ongoing Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We provide continuous support, updates, and enhancements to ensure your software stays current and
                  competitive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation First</h3>
              <p className="text-slate-600">
                We stay ahead of technology trends to ensure our clients benefit from the latest advances in software
                development and cloud computing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Without Compromise</h3>
              <p className="text-slate-600">
                Every line of code, every design element, and every user interaction is crafted with attention to detail
                and commitment to excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client Partnership</h3>
              <p className="text-slate-600">
                We view every project as a partnership. Your success is our success, and we're invested in your
                long-term growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency & Trust</h3>
              <p className="text-slate-600">
                Clear communication, honest timelines, and upfront pricing. We believe great partnerships are built on
                transparency.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Learning</h3>
              <p className="text-slate-600">
                The technology landscape evolves rapidly. We invest in ongoing education and skill development to
                provide cutting-edge solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Privacy</h3>
              <p className="text-slate-600">
                We implement industry-best security practices and treat your data with the highest level of protection
                and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're interested in our SaaS solutions or need custom software development, we're here to help
              you achieve your technology goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Consultation</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-semibold">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a className="text-slate-600 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-semibold">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-semibold">🕒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Office Hours</p>
                    <p className="text-slate-600">Monday-Friday, 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/edgenet-logo-icon.png"
                  alt="Edgenet Solutions"
                  width={32}
                  height={32}
                  className="w-8 h-8 brightness-0 invert"
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
                  <a href="#" className="hover:text-white transition-colors">
                    SaaS Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
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
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Edgenet Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
