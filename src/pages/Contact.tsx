import { useState } from "react";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/animations/Reveal";
import { useAppContext } from "@/src/lib/context";

export function Contact() {
  const { t } = useAppContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const service = formData.get('service');
    const details = formData.get('details');

    const subject = `New Project Inquiry from ${name}`;
    const body = `Name: ${name}
Email: ${email}
Company: ${company}
Service: ${service}

Details:
${details}`;

    window.location.href = `mailto:napaxiong@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{t.contact.title}</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-2">
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 rounded-3xl border border-foreground/10 bg-foreground/5 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                <p className="text-foreground/60 max-w-md">
                  Thank you for reaching out. I've received your project details and will be in touch shortly to discuss the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 rounded-3xl border border-foreground/10 bg-foreground/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">{t.contact.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">{t.contact.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground/80">{t.contact.company}</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground/80">{t.contact.service}</label>
                    <select 
                      id="service"
                      name="service"
                      className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all appearance-none"
                    >
                      <option value="web">{t.home.webDev}</option>
                      <option value="video">{t.home.aiVideo}</option>
                      <option value="photo">{t.home.neuroPhoto}</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-foreground/80">{t.contact.details}</label>
                  <textarea 
                    id="details" 
                    name="details"
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                    placeholder="Tell me about your industry, goals, and what you're looking to achieve..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  {t.contact.send} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.2} direction="left" className="space-y-8">
            <div className="p-8 rounded-3xl border border-foreground/10 bg-foreground/5">
              <h3 className="text-xl font-semibold mb-6">{t.contact.contactInfo}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">Email</div>
                    <a href="mailto:napaxiong@gmail.com" className="text-foreground hover:text-foreground/80 transition-colors">napaxiong@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">{t.contact.location}</div>
                    <div className="text-foreground">{t.contact.remote}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">{t.contact.responseTime}</div>
                    <div className="text-foreground">{t.contact.within24h}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 to-transparent">
              <h3 className="text-xl font-semibold mb-2">Not ready yet?</h3>
              <p className="text-foreground/60 mb-6 text-sm">
                Connect with me on social media to see my latest work and behind-the-scenes process.
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Instagram"].map(social => (
                  <a key={social} href="#" className="text-sm font-medium hover:text-foreground/70 transition-colors">
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
