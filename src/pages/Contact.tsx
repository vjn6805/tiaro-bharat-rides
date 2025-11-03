import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Veer Jain",
    role: "Co-Founder",
    quote: "Building the future of shared mobility, one ride at a time.",
  },
  {
    name: "Vijay Kant",
    role: "Co-Founder",
    quote: "Innovation drives us, sustainability guides us.",
  },
  {
    name: "Asshirvad",
    role: "Co-Founder",
    quote: "Together we travel further, together we create impact.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen gradient-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet the Team
          </h1>
          <p className="text-2xl text-muted-foreground mb-16">
            The visionaries behind Tiaro
          </p>
          
          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-card rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {member.name}
                </h3>
                
                <p className="text-accent font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground italic">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to join us on this journey? Follow our updates or reach out to us!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://www.linkedin.com/company/tiarorides/posts/?feedView=all', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Follow us on LinkedIn
              </Button>
              
              <Link to="/">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-card/90 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
