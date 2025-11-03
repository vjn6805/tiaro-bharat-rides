const About = () => {
  return (
    <section id="about" className="py-20 bg-card scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Why Tiaro?
          </h2>
          
          <div className="space-y-12">
            {/* Problem */}
            <div className="text-center animate-fade-in">
              <div className="inline-block p-4 bg-destructive/10 rounded-2xl mb-4">
                <p className="text-6xl">🚗</p>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Problem</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Urban congestion, high travel costs, and environmental impact affect millions of people every day. 
                Empty car seats and solo commutes waste resources and increase carbon emissions.
              </p>
            </div>

            {/* Solution */}
            <div className="text-center animate-fade-in">
              <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-4">
                <p className="text-6xl">✨</p>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Solution</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tiaro connects car owners, taxi drivers, and passengers to make commuting more <strong className="text-primary">affordable</strong>, 
                <strong className="text-primary"> sustainable</strong>, and <strong className="text-primary">community-driven</strong>. 
                We're building a smarter way to travel together.
              </p>
            </div>

            {/* Impact */}
            <div className="text-center animate-fade-in">
              <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                <p className="text-6xl">🌍</p>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Impact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By sharing rides, we reduce traffic congestion, lower travel expenses, and contribute to a cleaner environment. 
                Together, we're creating a more connected and sustainable future for Bharat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
