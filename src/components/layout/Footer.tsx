import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useAppContext } from "@/src/lib/context";

export function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="border-t border-foreground/10 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              Aidar<span className="text-foreground/50">.DEV</span>
            </Link>
            <p className="text-foreground/60 max-w-sm mb-8">
              {t.footer.desc}
            </p>
            <a href="mailto:hello@alex.dev" className="text-xl font-medium hover:text-foreground/80 transition-colors inline-flex items-center gap-2">
              napaxiong@gmail.com <ArrowUpRight size={20} />
            </a>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 text-foreground/90">{t.footer.services}</h4>
            <ul className="space-y-4 text-foreground/60">
              <li><Link to="/services" className="hover:text-foreground transition-colors">{t.home.webDev}</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">{t.home.aiVideo}</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">{t.home.neuroPhoto}</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">{t.nav.portfolio}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-foreground/90">{t.footer.connect}</h4>
            <ul className="space-y-4 text-foreground/60">
              <li><a href="https://www.instagram.com/aidar.akm/" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Instagram size={16}/> Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/aidar-akhmetzhanov-3a0002132/" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
              <li><a href="https://x.com/napoxiong" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Twitter size={16}/> X</a></li>
              <li><a href="https://github.com/napakenjack" className="hover:text-foreground transition-colors inline-flex items-center gap-2"><Github size={16}/> GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Aidar.dev. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
            <Link to="#" className="hover:text-foreground transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
