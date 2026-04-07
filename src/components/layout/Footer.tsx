import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              ALEX<span className="text-white/50">.DEV</span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8">
              Websites, AI Videos, and Neuro-Photo Content That Help Brands Look Premium and Sell Better.
            </p>
            <a href="mailto:hello@alex.dev" className="text-xl font-medium hover:text-white/80 transition-colors inline-flex items-center gap-2">
              hello@alex.dev <ArrowUpRight size={20} />
            </a>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 text-white/90">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI Video Production</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Neuro-Photo Sessions</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">View Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-white/90">Connect</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2"><Instagram size={16}/> Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2"><Twitter size={16}/> Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors inline-flex items-center gap-2"><Github size={16}/> GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© {new Date().getFullYear()} Alex.dev. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
