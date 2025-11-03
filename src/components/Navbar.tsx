import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-foreground">Tiaro</div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={handleHomeClick}
              className="text-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary"
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary"
            >
              Features
            </Button>
            <Link to="/careers">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                Careers
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
