import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/src/components/animations/Reveal";
import { cn } from "@/src/lib/utils";
import { useAppContext } from "@/src/lib/context";

const projects = [
  {
    id: 1,
    title: "Aura Medical Center",
    category: "Websites",
    niche: "Healthcare",
    summary: "A premium, trust-building website for a modern private clinic.",
    achieved: "Increased patient bookings by 45% through optimized UX.",
    image: "https://napaxiong.wordpress.com/wp-content/uploads/2026/04/frame-4.png",
    tags: ["React", "UI/UX", "Booking Integration"]
  },
  {
    id: 2,
    title: "Premium Cosmetics",
    category: "AI Videos & Neuro photosession",
    niche: "Beauty",
    summary: "Cinematic AI promo reel for a new skincare line launch.",
    achieved: "Generated 1.2M views on social media with 0 physical shoot costs.",
    image: "https://napaxiong.wordpress.com/wp-content/uploads/2026/04/cosmetics.png",
    tags: ["AI Video", "Motion", "Sound Design"]
  },
  {
    id: 3,
    title: "Vanguard Real Estate",
    category: "Websites",
    niche: "Real Estate",
    summary: "High-end corporate website for luxury property developers.",
    achieved: "Elevated brand perception and streamlined lead generation.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    tags: ["Web Design", "CMS", "Animations"]
  },
  {
    id: 4,
    title: "Velvet Fashion",
    category: "Neuro-Photo",
    niche: "Fashion",
    summary: "Complete AI-generated lookbook for a seasonal collection.",
    achieved: "Saved $15k in production costs while maintaining high-fashion aesthetics.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI Generation", "Styling", "Retouching"]
  },
  {
    id: 5,
    title: "Apex Automotive",
    category: "AI Videos",
    niche: "Automotive",
    summary: "Dynamic social media ad campaign for a luxury car rental service.",
    achieved: "300% increase in ad engagement compared to standard stock footage.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
    tags: ["AI Video", "VFX", "Color Grading"]
  },
  {
    id: 6,
    title: "BuildCore Construction",
    category: "Websites",
    niche: "Construction",
    summary: "Robust corporate site showcasing large-scale infrastructure projects.",
    achieved: "Modernized a legacy brand and improved B2B inquiries.",
    image: "https://images.unsplash.com/photo-1541888087425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Corporate Web", "Portfolio System"]
  }
];

export function Portfolio() {
  const { t } = useAppContext();
  const [activeCategory, setActiveCategory] = useState(t.portfolio.all);

  const categories = [t.portfolio.all, t.portfolio.web, t.portfolio.video, t.portfolio.photo];

  // Map translated categories to internal project categories
  const categoryMap: Record<string, string> = {
    [t.portfolio.all]: "All",
    [t.portfolio.web]: "Websites",
    [t.portfolio.video]: "AI Videos",
    [t.portfolio.photo]: "Neuro-Photo"
  };

  const filteredProjects = projects.filter(p => 
    activeCategory === t.portfolio.all ? true : p.category === categoryMap[activeCategory]
  );

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{t.portfolio.title}</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            {t.portfolio.subtitle}
          </p>
        </Reveal>

        {/* Filter */}
        <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-foreground text-background" 
                  : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} className="group">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 border border-foreground/10">
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-background/50 backdrop-blur-md text-xs text-foreground border border-foreground/10">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-background/50 backdrop-blur-md text-xs text-foreground/70 border border-foreground/10">
                    {project.niche}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors group-hover:translate-x-1 transform" />
                </div>
                <p className="text-foreground/60 mb-4">{project.summary}</p>
                
                <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/5 mb-4">
                  <div className="text-xs text-foreground/40 uppercase tracking-wider mb-1">Result</div>
                  <div className="text-sm text-foreground/90">{project.achieved}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-foreground/40">#{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-foreground/40">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
