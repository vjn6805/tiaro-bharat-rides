import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger icons

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after click
    }
  };

  const handleHomeClick = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border w-full">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div
            className="text-xl font-bold text-foreground cursor-pointer"
            onClick={handleHomeClick}
          >
            Tiaro
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={handleHomeClick}
              className="text-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary"
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
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

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 pb-4">
          <div className="flex flex-col space-y-2 mt-2">
            <Button
              variant="ghost"
              onClick={handleHomeClick}
              className="text-foreground hover:text-primary justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary justify-start"
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary justify-start"
            >
              Features
            </Button>
            <Link to="/careers">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary justify-start w-full"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary justify-start w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
