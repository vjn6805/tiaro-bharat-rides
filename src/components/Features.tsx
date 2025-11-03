import { Shield, Users, DollarSign, Award, MapPin, FileCheck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI Fraud Detection",
    description: "Real-time alerts and intelligent verification to keep every ride safe",
  },
  {
    icon: Users,
    title: "Dedicated Ride Captains",
    description: "Every trip is monitored by our trained Captains for your peace of mind",
  },
  {
    icon: HeartHandshake,
    title: "Women-Only Rides",
    description: "Safe, secure ride options exclusively for women travelers",
  },
  {
    icon: DollarSign,
    title: "Mileage-Based Pricing",
    description: "Fair, transparent pricing based on actual distance traveled",
  },
  {
    icon: Award,
    title: "Eco Points & Rewards",
    description: "Earn points for every shared ride and redeem for discounts",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description: "Track your ride in real-time with face verification for safety",
  },
  {
    icon: FileCheck,
    title: "Insurance Options",
    description: "Comprehensive insurance coverage available for all parties",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-card scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          What Makes Tiaro Unique
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Experience the future of shared travel with features designed for safety, trust, and convenience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-muted rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
