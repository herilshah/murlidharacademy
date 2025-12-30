import { Heart, Baby, Camera, Sparkles, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Capturing your special day with elegance and emotion, preserving every precious moment of your celebration.",
  },
  {
    icon: Baby,
    title: "Maternity Shoot",
    description: "Celebrating the beautiful journey of motherhood with artistic and intimate maternity photography.",
  },
  {
    icon: Sparkles,
    title: "Baby Portraits",
    description: "Adorable portraits that capture the innocence and joy of your little ones' early moments.",
  },
  {
    icon: Camera,
    title: "Fashion Shoots",
    description: "Professional fashion photography that showcases style, creativity, and artistic vision.",
  },
  {
    icon: Users,
    title: "Special Events",
    description: "Documenting your important occasions with professionalism and attention to detail.",
  },
  {
    icon: Briefcase,
    title: "Model Portfolios",
    description: "Creating stunning portfolio images that highlight your unique features and professional potential.",
  },
];

const PhotographyServices = () => {
  return (
    <section id="services" className="py-24 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-display text-sm tracking-[0.3em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyServices;



