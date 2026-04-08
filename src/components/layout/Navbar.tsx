import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/Button";
import { useAppContext } from "@/src/lib/context";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, language, setLanguage, t } = useAppContext();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.portfolio, path: "/portfolio" },
    { name: t.nav.about, path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-foreground/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter z-50 relative">
          AIDAR<span className="text-foreground/50">.DEV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                location.pathname === link.path ? "text-foreground" : "text-foreground/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-foreground/20 pl-6">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground/80"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="flex items-center gap-1 p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground/80 text-sm font-medium uppercase"
              aria-label="Toggle Language"
            >
              <Globe size={18} />
              {language}
            </button>
          </div>

          <a href="https://wa.me/77754015204" target="_blank" rel="noopener noreferrer">
            <Button variant="glass" size="sm" className="ml-2">
              {t.nav.discuss}
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    location.pathname === link.path ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center gap-6 mt-4">
                <button 
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-foreground/10 text-foreground"
                >
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button 
                  onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                  className="flex items-center gap-2 p-3 rounded-full bg-foreground/10 text-foreground text-lg font-medium uppercase"
                >
                  <Globe size={24} />
                  {language}
                </button>
              </div>

              <a href="https://wa.me/77754015204" target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button size="lg">{t.nav.discuss}</Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
