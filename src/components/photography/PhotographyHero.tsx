import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const PhotographyHero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <p className="text-white font-display font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Professional Photography
          </p>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-white">PURVI</span>
          <br />
          <span className="text-white">PHOTOGRAPHY</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-white/90 font-light italic mb-4 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          LOVE BEGINS
        </p>
        
        <p 
          className="text-white/80 max-w-2xl mx-auto mb-6 animate-fade-in text-lg"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          Capturing moments with precision, emotion, and artistry. We create timeless frames that speak stories, celebrate memories, and preserve the beauty of every detail with care.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black"
            onClick={() => scrollToSection("contact")}
          >
            Book Session
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white"
            onClick={() => scrollToSection("services")}
          >
            View Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default PhotographyHero;



