import { Button } from "@/components/ui/button";
import { Users, Rocket, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

const Careers = () => {
  return (
    <div className="min-h-screen gradient-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Work with Tiaro
          </h1>
          <p className="text-2xl text-muted-foreground mb-12">
            Shape the Future of Mobility
          </p>
          
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-16">
            <p className="text-xl text-foreground leading-relaxed mb-8">
              We're inviting passionate students and innovators to join us in revolutionizing 
              how India travels. Be part of a team that's making transportation smarter, 
              safer, and more sustainable.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Collaborate</h3>
              <p className="text-muted-foreground">
                Work with a diverse team of creative minds
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-4">
                <Rocket className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Innovate</h3>
              <p className="text-muted-foreground">
                Build cutting-edge solutions that matter
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <div className="inline-block p-4 bg-destructive/10 rounded-2xl mb-4">
                <Heart className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Impact</h3>
              <p className="text-muted-foreground">
                Make a real difference in millions of lives
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Join the Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're looking for passionate individuals who want to make a difference
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Apply for Internship
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Application form coming soon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
