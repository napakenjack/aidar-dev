import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Palette, Zap } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/animations/Reveal";

export function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Hi, I'm Alex.
            </h1>
            <p className="text-2xl text-white/80 mb-6 font-light">
              A multi-disciplinary digital specialist bridging the gap between engineering and visual marketing.
            </p>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              I believe that a brand's digital presence shouldn't be fragmented across multiple agencies. By combining high-end web development with advanced AI content generation, I provide a unified, premium ecosystem for businesses that want to stand out and convert.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Let's Talk <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Reveal>
          
          <Reveal direction="left" className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Alex - Digital Specialist"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20 max-w-[240px]">
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-white/60">Years of combined experience in tech & design</div>
            </div>
          </Reveal>
        </div>

        {/* Philosophy */}
        <Reveal className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold">My Philosophy</h2>
            </div>
            <div className="md:col-span-2 text-xl text-white/70 leading-relaxed font-light">
              "Technology should elevate design, not restrict it. By leveraging AI in the creative process, we can achieve cinematic visuals and photorealistic imagery at a fraction of traditional costs, while custom web development ensures that content lives in a high-performing, conversion-optimized environment."
            </div>
          </div>
        </Reveal>

        {/* Expertise Grid */}
        <Reveal className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6 text-white/80" />,
                title: "Frontend Engineering",
                desc: "React, Vue, Three.js, Tailwind. Building fast, interactive, and accessible web applications."
              },
              {
                icon: <Cpu className="w-6 h-6 text-white/80" />,
                title: "AI Workflows",
                desc: "Stable Diffusion, Midjourney, Runway, ComfyUI. Advanced prompting and model fine-tuning."
              },
              {
                icon: <Palette className="w-6 h-6 text-white/80" />,
                title: "Art Direction",
                desc: "Visual strategy, color theory, typography, and premium brand positioning."
              },
              {
                icon: <Zap className="w-6 h-6 text-white/80" />,
                title: "Conversion Optimization",
                desc: "UX/UI design focused on user psychology, trust-building, and lead generation."
              }
            ].map((skill, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </div>
  );
}
