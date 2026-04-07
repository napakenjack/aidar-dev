import { useState } from "react";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/animations/Reveal";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only simulation
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's Talk.</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Need a website, AI video, or visual content for your brand? Describe your project below and I'll get back to you within 24 hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-2">
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 rounded-3xl border border-white/10 bg-white/5 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                <p className="text-white/60 max-w-md">
                  Thank you for reaching out. I've received your project details and will be in touch shortly to discuss the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/80">Company / Brand</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-white/80">Service Needed</label>
                    <select 
                      id="service"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none"
                    >
                      <option value="web">Website Development</option>
                      <option value="video">AI Video Production</option>
                      <option value="photo">Neuro-Photo Session</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-white/80">Project Details</label>
                  <textarea 
                    id="details" 
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                    placeholder="Tell me about your industry, goals, and what you're looking to achieve..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Send Request <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.2} direction="left" className="space-y-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Email</div>
                    <a href="mailto:hello@alex.dev" className="text-white hover:text-white/80 transition-colors">hello@alex.dev</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Location</div>
                    <div className="text-white">Remote / Worldwide</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Response Time</div>
                    <div className="text-white">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
              <h3 className="text-xl font-semibold mb-2">Not ready yet?</h3>
              <p className="text-white/60 mb-6 text-sm">
                Connect with me on social media to see my latest work and behind-the-scenes process.
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Instagram"].map(social => (
                  <a key={social} href="#" className="text-sm font-medium hover:text-white/70 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
