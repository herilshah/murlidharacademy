import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Quick Session",
    duration: "1 Hour",
    price: "₹1,200",
    description: "Perfect for short practice sessions",
    features: [
      "Full studio access",
      "Professional lighting",
      "Sound system included",
      "150+ color modes",
    ],
    popular: false,
  },
  {
    name: "Extended Session",
    duration: "3 Hours",
    price: "₹2,500",
    description: "Most popular for shoots & workshops",
    features: [
      "Full studio access",
      "Professional lighting",
      "Sound system included",
      "150+ color modes",
      "Best value for money",
      "Extended creative time",
    ],
    popular: true,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Studio Charges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all your creative needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card rounded-3xl p-8 relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-primary glow-box" 
                  : "hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-pink-500 px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                    <span className="text-primary-foreground text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">{plan.duration}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="font-display text-4xl font-bold text-gradient">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
                onClick={scrollToContact}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * ₹1,000 booking charges applicable for all reservations
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
