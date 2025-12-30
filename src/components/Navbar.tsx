import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const studioNavLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Rules", href: "#rules" },
  { label: "Contact", href: "#contact" },
];

const photographyNavLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isPhotographyPage = location.pathname === "/photography";
  const navLinks = isPhotographyPage ? photographyNavLinks : studioNavLinks;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = isPhotographyPage
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent"
      }`
    : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`;

  const logoColor = isPhotographyPage ? "text-white" : "";
  const logoStyle = isPhotographyPage ? {} : { color: '#D4AF37' };
  const linkClasses = isPhotographyPage
    ? "text-white/60 hover:text-white transition-colors font-medium text-sm tracking-wide"
    : "text-muted-foreground hover:text-foreground transition-colors font-medium text-sm tracking-wide";
  const mobileLinkClasses = isPhotographyPage
    ? "text-white/60 hover:text-white transition-colors font-medium py-2"
    : "text-muted-foreground hover:text-foreground transition-colors font-medium py-2";
  const menuButtonClasses = isPhotographyPage
    ? "md:hidden p-2 text-white"
    : "md:hidden p-2 text-foreground";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={isPhotographyPage ? "/photography" : "/"} className={`font-display font-bold text-xl ${logoColor}`} style={logoStyle}>
            {isPhotographyPage ? "PURVI PHOTOGRAPHY" : "MURLIDHAR ACADEMY"}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={linkClasses}
              >
                {link.label}
              </a>
            ))}
            {/* Cross-link to other page */}
            <Link
              to={isPhotographyPage ? "/" : "/photography"}
              className={linkClasses}
            >
              {isPhotographyPage ? "Dance Studio" : "Photography"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={menuButtonClasses}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={mobileLinkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Cross-link to other page */}
              <Link
                to={isPhotographyPage ? "/" : "/photography"}
                className={mobileLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isPhotographyPage ? "Dance Studio" : "Photography"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
