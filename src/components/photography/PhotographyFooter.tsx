import { Link } from "react-router-dom";
import { Phone, MapPin, Heart, Instagram, Youtube, Facebook } from "lucide-react";
import purviLogo from "@/assets/purvi_logo.jpg";

const PhotographyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2 text-white">
              PURVI PHOTOGRAPHY
            </h3>
            <p className="text-white/60 italic mb-4">
              Capturing moments with precision, emotion, and artistry
            </p>
            {/* Logo in round circle */}
            <div className="flex justify-center md:justify-start">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <img 
                  src={purviLogo} 
                  alt="Purvi Photography Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/photography#about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/photography#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/photography#portfolio"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/photography#contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Dance Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919167121448"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9167121448
              </a>
              <a 
                href="tel:+919167604033"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9167604033
              </a>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                Kandivali, Mumbai
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.youtube.com/@PURVI_PHOTOGRAPHY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" style={{ color: '#FF0000' }} />
                </a>
                <a
                  href="https://instagram.com/purvi_photography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61563844081561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" style={{ color: '#1877F2' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Purvi Photography. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-white fill-white" /> by Heril and Neer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PhotographyFooter;


