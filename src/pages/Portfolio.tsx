import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/src/components/animations/Reveal";
import { cn } from "@/src/lib/utils";

const projects = [
  {
    id: 1,
    title: "Aura Medical Center",
    category: "Websites",
    niche: "Healthcare",
    summary: "A premium, trust-building website for a modern private clinic.",
    achieved: "Increased patient bookings by 45% through optimized UX.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    tags: ["React", "UI/UX", "Booking Integration"]
  },
  {
    id: 2,
    title: "Lumina Cosmetics",
    category: "AI Videos",
    niche: "Beauty",
    summary: "Cinematic AI promo reel for a new skincare line launch.",
    achieved: "Generated 1.2M views on social media with 0 physical shoot costs.",
    image: "https://images.unsplash.com/photo-1615397323712-42b781600868?q=80&w=2000&auto=format&fit=crop",
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

const categories = ["All", "Websites", "AI Videos", "Neuro-Photo"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(p => 
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Selected Work</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            A showcase of premium websites, cinematic AI videos, and neuro-photo campaigns built for businesses worldwide.
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
                  ? "bg-white text-black" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
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
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 border border-white/10">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs text-white border border-white/10">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs text-white/70 border border-white/10">
                    {project.niche}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors group-hover:translate-x-1 transform" />
                </div>
                <p className="text-white/60 mb-4">{project.summary}</p>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-4">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Result</div>
                  <div className="text-sm text-white/90">{project.achieved}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-white/40">#{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white/40">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
