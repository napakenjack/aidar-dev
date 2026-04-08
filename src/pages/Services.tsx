import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code, Video, Camera } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/animations/Reveal";
import { useAppContext } from "@/src/lib/context";

export function Services() {
  const { t } = useAppContext();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{t.services.title}</h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            {t.services.subtitle}
          </p>
        </Reveal>

        <div className="space-y-32">
          {/* Service 1 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right" className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                  alt="Web Development"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <Code className="w-10 h-10 text-foreground mb-4" />
                  <div className="text-2xl font-semibold">Web Development</div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Business Websites</h2>
              <p className="text-lg text-foreground/60 mb-8">
                Your website is your most important digital asset. I build fast, responsive, and conversion-focused websites tailored to your industry's specific needs.
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-foreground/90">Perfect for:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Medical Centers", "Real Estate", "Construction", "Corporate", "Service Businesses"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-foreground/10 text-sm text-foreground/70 bg-foreground/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {["Conversion-optimized landing pages", "Full corporate websites", "Performance & SEO focused", "Premium UI/UX design"].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact?service=web">
                <Button>Request Web Project</Button>
              </Link>
            </Reveal>
          </section>

          {/* Service 2 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Video Production</h2>
              <p className="text-lg text-foreground/60 mb-8">
                Cinematic, high-end video content created entirely with advanced AI tools. Perfect for social media ads, brand storytelling, and product showcases without the massive budget of a traditional shoot.
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-foreground/90">Perfect for:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Cosmetics", "Fashion", "Automotive", "Luxury Products", "Social Ads"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-foreground/10 text-sm text-foreground/70 bg-foreground/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {["Short-form promotional videos", "Cinematic brand visuals", "Rapid production turnaround", "Significantly lower costs"].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact?service=video">
                <Button>Request AI Video</Button>
              </Link>
            </Reveal>
            <Reveal direction="left">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" 
                  alt="AI Video Production"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <Video className="w-10 h-10 text-foreground mb-4" />
                  <div className="text-2xl font-semibold">AI Video</div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Service 3 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right" className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Neuro-Photo Sessions"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <Camera className="w-10 h-10 text-foreground mb-4" />
                  <div className="text-2xl font-semibold">Neuro-Photo</div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Neuro-Photo Sessions</h2>
              <p className="text-lg text-foreground/60 mb-8">
                Replace or augment expensive physical photoshoots. I generate photorealistic, highly stylized imagery for your products, campaigns, and brand identity using advanced AI models.
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-foreground/90">Perfect for:</h4>
                <div className="flex flex-wrap gap-2">
                  {["E-commerce", "Fashion Campaigns", "Product Catalogs", "Instagram Visuals"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-foreground/10 text-sm text-foreground/70 bg-foreground/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {["Infinite creative variations", "Consistent brand aesthetics", "No studio or model fees", "Fast delivery of large sets"].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact?service=photo">
                <Button>Request Photo Session</Button>
              </Link>
            </Reveal>
          </section>
        </div>

        {/* Process Section */}
        <Reveal className="mt-40 border-t border-foreground/10 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.services.process}</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">{t.services.processSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t.services.step1, desc: t.services.step1Desc },
              { step: "02", title: t.services.step2, desc: t.services.step2Desc },
              { step: "03", title: t.services.step3, desc: t.services.step3Desc },
              { step: "04", title: t.services.step4, desc: t.services.step4Desc }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-bold text-foreground/10 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/50">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-foreground/10 -ml-4" />}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
