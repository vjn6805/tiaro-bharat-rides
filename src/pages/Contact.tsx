import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { User } from "lucide-react";

const Contact = () => {
  const founders = [
    { name: "Veer Jain", title: "Co-founder & CEO" },
    { name: "Vijay Kant", title: "Co-founder & COO" },
    { name: "Asshirvad", title: "Co-founder & CTO" },
  ];

  return (
    <div className="min-h-screen gradient-primary">
      <Navbar />
      
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet the Founders Behind Tiaro
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            We're a team passionate about building smarter, sustainable mobility solutions for Bharat.
          </p>
          
          {/* Founders Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg border border-border">
                  <User className="w-20 h-20 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-muted-foreground">{founder.title}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <p className="text-xl italic text-foreground">
              "The road to a sustainable future is one we share — together we drive change."
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="text-left">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>
              <div className="text-left">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>
              <div className="text-left">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="mt-2 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
