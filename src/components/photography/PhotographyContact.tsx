import { Phone, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhotographyContact = () => {
  const phoneNumber1 = "+919167121448";
  const phoneNumber2 = "+919167604033";
  const whatsappLink1 = `https://wa.me/${phoneNumber1.replace("+", "")}?text=Hi, I'm interested in photography services.`;
  const whatsappLink2 = `https://wa.me/${phoneNumber2.replace("+", "")}?text=Hi, I'm interested in photography services.`;
  const instagramLink = "https://instagram.com/purvi_photography";
  const facebookLink = "https://facebook.com/PurviPhotography";
  const address = "C wing 121, Victory platinum, opposite to raghuvanshi, near Kandivali, mumbai 400067";
  const googleMapsLink = "https://maps.app.goo.gl/c1RtpJLCtWbAgvQd6";

  return (
    <section id="contact" className="py-24 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-display text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ready to capture your special moments? Reach out to us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a 
                  href={`tel:${phoneNumber1}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-semibold group-hover:text-white transition-colors">
                      {phoneNumber1}
                    </p>
                  </div>
                </a>

                <a 
                  href={`tel:${phoneNumber2}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone (Alternate)</p>
                    <p className="text-white font-semibold group-hover:text-white transition-colors">
                      {phoneNumber2}
                    </p>
                  </div>
                </a>

                <a 
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold group-hover:text-white transition-colors">
                      {address}
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black w-full"
                  onClick={() => window.open(whatsappLink1, "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white w-full"
                  onClick={() => window.open(`tel:${phoneNumber1}`, "_self")}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1234567890123!2d72.8493822!3d19.2047403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71ab749b021%3A0xd676e86495fabbf5!2sMurlidhar%20Academy!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(1) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Photography Studio Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyContact;

