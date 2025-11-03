import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden gradient-primary flex items-center justify-center">
      {/* Launching Soon Badge */}
      <div className="absolute top-20 right-4 sm:right-8 z-10">
        <div className="bg-card/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-border">
          <p className="text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2 whitespace-nowrap">
            <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            App Launching Soon 🚀
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 mt-16 sm:mt-20 text-center w-full">
        <div className="max-w-5xl mx-auto w-full">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in leading-tight break-words">
            Built for Bharat. Driven by Innovation.
          </h1>

          {/* Secondary Heading */}
          <p className="text-base sm:text-xl lg:text-3xl font-semibold text-foreground/90 mb-2 sm:mb-4 break-words">
            Reimagining Carpooling for Every Indian.
          </p>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-xl font-medium text-accent mb-6 sm:mb-12 break-words px-2">
            A Better Carpooling Experience — Smarter, Safer, and Greener.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto min-w-0"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-card/90 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto min-w-0"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/tiarorides/posts/?feedView=all",
                  "_blank"
                )
              }
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-25 sm:opacity-20 z-0">
        <img
          src={heroNetwork}
          alt="Connected network of carpooling vehicles"
          className="w-full h-full object-cover object-center max-w-none"
        />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default Hero;
