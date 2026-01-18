import { MapPin, Heart, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5" />
          <p className="text-lg">
            At. Post Isoli, Ta. Chikhali, Dist. Buldhana, Maharashtra, India
          </p>
        </div>
        {/* Contact Section (Side-by-side on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Phone */}
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <a
              href="tel:+919881392522"
              className="text-lg hover:text-secondary transition-colors"
            >
              +91 9881392522
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:riyajkalal786@gmail.com"
              className="text-lg hover:text-secondary transition-colors"
            >
              riyajkalal786@gmail.com
            </a>
          </div>
          {/* WhatsApp */}
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <a
              href="https://wa.me/919881392522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-secondary transition-colors"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
          {/* Divider */}
          <div className="w-16 h-0.5 bg-secondary mx-auto my-6 rounded-full" />
          {/* Society Name */}
          <p className="text-sm opacity-80 mb-4">
            Maulana Aazad Alpsankhyank Education & Welfare Society
          </p>
          {/* Footer Note */}
          <p className="text-sm opacity-70 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary" /> for our community
          </p>
        </div>
    </footer>
  );
};

export default Footer;
