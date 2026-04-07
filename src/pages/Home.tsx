import { Link } from "react-router-dom";
import { ArrowRight, Code, Video, Camera, CheckCircle2, Star, ChevronRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/animations/Reveal";
import { HeroScene } from "@/src/components/3d/HeroScene";
import { AccordionItem } from "@/src/components/ui/Accordion";
import { useState } from "react";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <HeroScene />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/80 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl mx-auto leading-tight">
              Websites, AI Videos & <br className="hidden md:block" />
              <span className="text-gradient">Neuro-Photo Content</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              I help brands look premium and sell better. A unified digital ecosystem combining high-converting web development with cutting-edge AI visual marketing.
            </p>
          </Reveal>
          
          <Reveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto group">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                See Work
              </Button>
            </Link>
          </Reveal>

          <Reveal delay={0.6} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
            {[
              { label: "Medical Centers", value: "Clinics" },
              { label: "Real Estate", value: "Agencies" },
              { label: "Fashion & Beauty", value: "Brands" },
              { label: "Construction", value: "Companies" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-white/40 text-sm mb-1">{stat.value}</div>
                <div className="font-medium text-white/90">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Services</h2>
              <p className="text-white/60 max-w-2xl text-lg">
                A complete digital production pipeline. From your online presence to the premium content that fills it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 mb-6 text-white/80" />,
                title: "Website Development",
                desc: "High-converting, custom business websites built for performance and trust.",
                industries: "Medical, Real Estate, Corporate",
                benefits: ["Responsive Design", "SEO Optimized", "Conversion Focused"],
              },
              {
                icon: <Video className="w-8 h-8 mb-6 text-white/80" />,
                title: "AI Video Production",
                desc: "Cinematic, branded AI-generated video content for marketing and social media.",
                industries: "Cosmetics, Fashion, Automotive",
                benefits: ["Faster Delivery", "Lower Costs", "Premium Quality"],
              },
              {
                icon: <Camera className="w-8 h-8 mb-6 text-white/80" />,
                title: "Neuro-Photo Sessions",
                desc: "AI-powered photo content replacing expensive physical shoots for products and campaigns.",
                industries: "E-commerce, Luxury, Brands",
                benefits: ["Infinite Variations", "Brand Consistency", "Rapid Scaling"],
              }
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1} className="glass p-8 rounded-3xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  {service.icon}
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-6">{service.desc}</p>
                  
                  <div className="mb-6">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Best For</div>
                    <div className="text-sm text-white/80">{service.industries}</div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-white/40" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link to="/services" className="inline-flex items-center text-sm font-medium hover:text-white/80 transition-colors">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-32 border-y border-white/10 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Why choose a hybrid <br/>digital specialist?
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Hiring separate agencies for web development, video production, and photography is slow, expensive, and often leads to an inconsistent brand image. I provide a unified solution.
              </p>
              <Link to="/about">
                <Button variant="outline">Read My Story</Button>
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Unified Vision", desc: "Your website and visual content share the same premium DNA." },
                { title: "Faster Execution", desc: "Direct communication and streamlined workflows." },
                { title: "Reduced Costs", desc: "AI production significantly lowers traditional shoot budgets." },
                { title: "Business Focused", desc: "Everything is designed to build trust and generate leads." }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-semibold mb-2 text-white/90">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
              <p className="text-white/60 text-lg">Recent projects across web and AI content.</p>
            </div>
            <Link to="/portfolio">
              <Button variant="ghost" className="group">
                View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Aura Medical Center",
                category: "Website Development",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
              },
              {
                title: "Lumina Cosmetics",
                category: "AI Video & Neuro-Photo",
                image: "https://images.unsplash.com/photo-1615397323712-42b781600868?q=80&w=2000&auto=format&fit=crop",
              }
            ].map((work, i) => (
              <Reveal key={i} delay={i * 0.1} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{work.title}</h3>
                    <p className="text-white/50 text-sm">{work.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#0f0f0f] border-y border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Client Success</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">What businesses say about working together.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The website redesign completely changed how patients perceive our clinic. Bookings are up, and the premium feel matches our actual service quality.",
                author: "Dr. Sarah Jenkins",
                role: "Founder, Aura Medical Center"
              },
              {
                quote: "We saved thousands on our seasonal campaign by using neuro-photo sessions instead of a traditional shoot. The results were indistinguishable from real photography.",
                author: "Marcus Chen",
                role: "Creative Director, Velvet Fashion"
              },
              {
                quote: "The AI video ads outperformed our standard content by 300%. Having one person handle both our web presence and video content made the process incredibly smooth.",
                author: "Elena Rodriguez",
                role: "Marketing Head, Apex Automotive"
              }
            ].map((testimonial, i) => (
              <Reveal key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-white/5 border border-white/5 relative">
                <div className="text-4xl text-white/20 font-serif absolute top-6 left-6">"</div>
                <p className="text-white/80 mb-8 relative z-10 pt-4 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-white/90">{testimonial.author}</div>
                  <div className="text-sm text-white/50">{testimonial.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Common Questions</h2>
            <p className="text-white/60 text-lg">Everything you need to know about the process.</p>
          </Reveal>

          <div className="space-y-2">
            {[
              {
                q: "What kind of websites do you build?",
                a: "I specialize in custom, conversion-focused websites for businesses. This includes corporate sites, medical center portals, real estate listings, and premium landing pages. I use modern tech stacks (React, Next.js, Tailwind) to ensure high performance and scalability."
              },
              {
                q: "Can you make AI videos for my brand?",
                a: "Yes. I create cinematic AI-generated videos tailored to your brand's aesthetic. These are perfect for social media ads, product showcases, and brand storytelling, offering a premium look without the cost of a traditional film crew."
              },
              {
                q: "What is a neuro-photo session?",
                a: "A neuro-photo session uses advanced AI models to generate photorealistic images of your products or brand concepts. It replaces or supplements physical photoshoots, allowing for infinite variations, diverse settings, and rapid scaling of your visual content."
              },
              {
                q: "How long does a project take?",
                a: "Timelines vary by scope. A premium landing page might take 2-3 weeks, while a full corporate website or a comprehensive AI video campaign can take 4-8 weeks. We'll establish a clear timeline during the discovery phase."
              },
              {
                q: "Do you work with different industries?",
                a: "Absolutely. My core expertise is in translating business goals into digital experiences, which applies across sectors. I have extensive experience with medical, real estate, construction, fashion, cosmetics, and automotive brands."
              }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <AccordionItem
                  title={faq.q}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.a}
                </AccordionItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to elevate your brand?</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Let's discuss how custom web development and AI visual content can help your business grow.
            </p>
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 text-lg">
                Discuss Your Project
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
