import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShownPopup) {
            setIsPopupVisible(true);
            setHasShownPopup(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasShownPopup]);

  const handlePhotographyClick = () => {
    setIsPopupVisible(false);
    navigate("/photography");
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <section ref={sectionRef} id="about" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-foreground font-display text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Creative Space
            </h2>
          </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Murlidhar Academy is a premium dance studio designed for rehearsals, 
              shoots, and workshops. With professional lighting, vibrant backdrops, 
              and a peaceful atmosphere, it's a space where creativity flows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a dancer, choreographer, content creator, or workshop 
              organizer — our studio provides the perfect environment to bring your 
              vision to life.
            </p>
            <div className="pt-4">
              <p className="text-foreground font-display font-semibold text-lg">
                By Krish Rughani
              </p>
              <p className="text-muted-foreground">Founder & Director</p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden glow-box">
                <img 
                  src={studio1} 
                  alt="Dance studio with colorful LED wall" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden glow-box">
                <img 
                  src={studio2} 
                  alt="Studio with dynamic lighting" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Small side popup */}
    {isPopupVisible && (
      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in-0 duration-300">
        <Card className="w-80 shadow-2xl border-2">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Also Checkout</p>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  PURVI PHOTOGRAPHY
                </h3>
                <Button 
                  onClick={handlePhotographyClick}
                  size="sm"
                  className="w-full"
                >
                  Visit Page
                </Button>
              </div>
              <button
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-sm hover:bg-accent"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    )}
    </>
  );
};

export default AboutSection;
