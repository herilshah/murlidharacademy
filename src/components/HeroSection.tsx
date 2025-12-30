import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Premium Dance Studio
          </p>
        </div>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <span className="text-gradient">MURLIDHAR</span>
          <br />
          <span className="text-foreground">ACADEMY</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-foreground/70 font-light italic mb-6 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          Where Rhythm Meets Devotion
        </p>
        
        <p 
          className="text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          A premium dance space designed for rehearsals, shoots, and workshops. 
          Professional lighting, vibrant backdrops, and creative freedom await.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Book Studio
          </Button>
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={() => scrollToSection("pricing")}
          >
            View Charges
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
