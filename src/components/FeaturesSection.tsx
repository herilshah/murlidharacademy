import amoebaWall from "@/assets/amoeba-wall.jpg";
import { Palette, Lightbulb, Square, Camera, Sparkles } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "THE WALL OF AMOEBA",
    description: "Stunning artistic backdrop with mesmerizing patterns for unique content",
  },
  {
    icon: Sparkles,
    title: "150+ Colors & Modes",
    description: "Dynamic lighting system with endless creative possibilities",
  },
  {
    icon: Lightbulb,
    title: "Professional Lighting",
    description: "Studio-grade lighting setup for perfect shots every time",
  },
  {
    icon: Square,
    title: "Spacious Dance Floor",
    description: "Large mirrored space designed for comfortable movement",
  },
  {
    icon: Camera,
    title: "Perfect for Content",
    description: "Ideal for reels, shoots, practice sessions & workshops",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-20">
        <img 
          src={amoebaWall} 
          alt="" 
          className="w-full h-full object-cover rounded-l-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Studio Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect dance practice, content creation, or workshop
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(280_100%_65%_/_0.2)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
