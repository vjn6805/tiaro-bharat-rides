import { Leaf, MapPinned, Users } from "lucide-react";

const stats = [
  {
    icon: Leaf,
    value: "30%",
    label: "Fewer emissions per shared ride",
  },
  {
    icon: MapPinned,
    value: "100+",
    label: "Cities planned for launch",
  },
  {
    icon: Users,
    value: "0",
    label: "Empty seats, zero wasted miles",
  },
];

const Impact = () => {
  return (
    <section className="py-20 gradient-green relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Sustainability & Impact
        </h2>
        
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Every shared ride makes a difference. Join us in building a cleaner, smarter tomorrow.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-4">
                <stat.icon className="w-12 h-12 text-accent" />
              </div>
              
              <div className="text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-card/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-2xl font-semibold text-foreground">
              "Together, we drive towards a cleaner, smarter tomorrow."
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Impact;
