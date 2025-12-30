import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+918356024721";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}?text=Hi, I'm interested in booking the dance studio.`;

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book Your Session
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing? Contact us to reserve your studio time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      +91 8356024721
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-foreground font-semibold">
                      Kandivali West, Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Availability</p>
                    <p className="text-foreground font-semibold">
                      By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  className="flex-1"
                  onClick={() => window.open(whatsappLink, "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1"
                  onClick={() => window.open(`tel:${phoneNumber}`, "_self")}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60279.01756289941!2d72.8075736!3d19.204566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6de26242c7d%3A0x5f66ebf43589ed09!2sKandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703676000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
