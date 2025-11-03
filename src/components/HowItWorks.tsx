import { Search, Shield, MapPin, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Offer or Search a Ride",
    description: "Post your trip or find available rides going your way",
  },
  {
    icon: Shield,
    title: "Book Securely",
    description: "AI verification & OTP-based secure booking process",
  },
  {
    icon: MapPin,
    title: "Track Live Ride",
    description: "Real-time GPS tracking with dedicated Captain support",
  },
  {
    icon: Star,
    title: "Rate & Earn Rewards",
    description: "Rate your experience and earn Eco Points for future discounts",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          How Tiaro Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Four simple steps to smarter travel
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              
              <div className="mt-6 mb-6 inline-block p-4 bg-accent/10 rounded-2xl">
                <step.icon className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open('https://www.linkedin.com/company/tiarorides/posts/?feedView=all', '_blank')}
          >
            Join the Waitlist – Be the First to Ride with Tiaro
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
