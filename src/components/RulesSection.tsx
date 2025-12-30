import { 
  IndianRupee, 
  Footprints, 
  Calendar, 
  AlertTriangle, 
  Clock, 
  Timer,
  Wallet,
  CreditCard
} from "lucide-react";

const rules = [
  {
    icon: IndianRupee,
    title: "Booking Charges",
    description: "₹1,000 booking charges applicable for all reservations",
  },
  {
    icon: Footprints,
    title: "No Outside Footwear",
    description: "Please remove outdoor shoes before entering the studio floor",
  },
  {
    icon: Calendar,
    title: "No Rescheduling",
    description: "Rescheduling is not allowed without prior notice",
  },
  {
    icon: AlertTriangle,
    title: "Damage Policy",
    description: "Any damage to studio property will be charged accordingly",
  },
  {
    icon: Clock,
    title: "Extension Policy",
    description: "More than 10 minutes extension will be charged as extra ½ hour",
  },
  {
    icon: Timer,
    title: "Setup Time",
    description: "Setup and pack-up time is included in your booked slot",
  },
  {
    icon: Wallet,
    title: "Cancellation",
    description: "Full refund only if cancellation is from studio side",
  },
  {
    icon: CreditCard,
    title: "Advance Payment",
    description: "50% payment required in advance to confirm booking",
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Guidelines
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Studio Rules
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please review our policies to ensure a smooth booking experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <rule.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
