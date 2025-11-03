import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-primary flex items-center justify-center overflow-hidden">
      {/* Launching Soon Badge */}
      <div className="absolute top-8 right-8 z-10">
        <div className="bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-border">
          <p className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            App Launching Soon 🚀
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Built for Bharat. Driven by Innovation.
          </h1>
          
          {/* Secondary Heading */}
          <p className="text-2xl md:text-4xl font-semibold text-foreground/90 mb-4">
            Reimagining Carpooling for Every Indian.
          </p>
          
          {/* Call to Action */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Join the movement to travel smarter and greener.
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium text-accent mb-12">
            A Better Carpooling Experience — Smarter, Safer, and Greener.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-card/90 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://www.linkedin.com/company/tiarorides/posts/?feedView=all', '_blank')}
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none opacity-30">
        <img 
          src={heroNetwork} 
          alt="Connected network of carpooling vehicles" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default Hero;
