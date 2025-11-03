import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            Tiaro
          </div>
          
          <div className="flex items-center gap-2">
            {location.pathname === "/" ? (
              <>
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
              </>
            ) : (
              <>
                <Link to="/">
                  <Button variant="ghost" className="text-foreground hover:text-primary">
                    Home
                  </Button>
                </Link>
                <Link to="/#about">
                  <Button variant="ghost" className="text-foreground hover:text-primary">
                    About Us
                  </Button>
                </Link>
                <Link to="/#features">
                  <Button variant="ghost" className="text-foreground hover:text-primary">
                    Features
                  </Button>
                </Link>
              </>
            )}
            
            <Link to="/careers">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Career
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="ghost" className="text-foreground hover:text-primary">
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
