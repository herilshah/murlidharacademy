import { Phone, MapPin, Heart, Youtube, Instagram } from "lucide-react";
import murlidharLogo from "@/assets/murlidhar_logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2" style={{ color: '#D4AF37' }}>
              MURLIDHAR ACADEMY
            </h3>
            <p className="text-muted-foreground italic font-bold mb-4">
              Where Rhythm Meets Devotion
            </p>
            {/* Logo in round circle */}
            <div className="flex justify-center md:justify-start">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-lg">
                <img 
                  src={murlidharLogo} 
                  alt="Murlidhar Academy Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Features", "Pricing", "Rules", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/photography"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Photography
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+918356024721"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 8356024721
              </a>
              <a 
                href="https://maps.app.goo.gl/c1RtpJLCtWbAgvQd6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                121 Victory Platinum SV road Kandivali (W)
              </a>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.youtube.com/@murlidharacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" style={{ color: '#FF0000' }} />
                </a>
                <a
                  href="https://www.instagram.com/murlidhar_dancestudio_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Murlidhar Academy. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-foreground fill-foreground" /> by Heril and Neer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
