import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
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
  );
};

export default AboutSection;
