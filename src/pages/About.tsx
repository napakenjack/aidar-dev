import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Palette, Zap } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/animations/Reveal";
import { useAppContext } from "@/src/lib/context";

export function About() {
  const { t } = useAppContext();

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              {t.about.title}
            </h1>
            <p className="text-2xl text-foreground/80 mb-6 font-light">
              {t.about.subtitle}
            </p>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              {t.about.bio1}
            </p>
            <a href="https://wa.me/77754015204" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group">
                {t.nav.discuss} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </Reveal>
          
          <Reveal direction="left" className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-foreground/10">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
              <img 
                src="https://res.cloudinary.com/dkptvohx2/image/upload/ChatGPT_Image_Mar_25_2026_09_17_35_AM_twj0g8.png" 
                alt="Aidar - Digital Specialist"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20 max-w-[240px]">
              <div className="text-3xl font-bold mb-1">4+</div>
              <div className="text-sm text-foreground/60">Years of combined experience in tech & design</div>
            </div>
          </Reveal>
        </div>

        {/* Philosophy */}
        <Reveal className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold">My Philosophy</h2>
            </div>
            <div className="md:col-span-2 text-xl text-foreground/70 leading-relaxed font-light">
              {t.about.bio2}
            </div>
          </div>
        </Reveal>

        {/* Expertise Grid */}
        <Reveal className="mb-20">
          <h2 className="text-3xl font-bold mb-12">{t.about.expertise}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6 text-foreground/80" />,
                title: t.about.frontend,
                desc: t.about.frontendDesc
              },
              {
                icon: <Cpu className="w-6 h-6 text-foreground/80" />,
                title: t.about.backend,
                desc: t.about.backendDesc
              },
              {
                icon: <Palette className="w-6 h-6 text-foreground/80" />,
                title: t.about.aiGen,
                desc: t.about.aiGenDesc
              },
              {
                icon: <Zap className="w-6 h-6 text-foreground/80" />,
                title: t.about.optimization,
                desc: t.about.optimizationDesc
              }
            ].map((skill, i) => (
              <div key={i} className="p-8 rounded-3xl bg-foreground/5 border border-foreground/5 hover:bg-foreground/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </div>
  );
}
