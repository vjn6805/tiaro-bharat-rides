import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-primary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Tiaro</h3>
              <p className="text-muted-foreground">
              Empowering the Way Bharat Moves
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/tiarorides/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                {/* Placeholder icons for future social media */}
                
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 Tiaro – Empowering the Way Bharat Moves
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
