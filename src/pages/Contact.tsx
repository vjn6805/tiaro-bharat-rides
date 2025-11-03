import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import veerimg from "@/assets/veerimg.jpg";
import asshimg from "@/assets/asshimg.jpg";
import vijayimg from "@/assets/vijayimg.jpg";

const Contact = () => {
  const founders = [
    { name: "Veer Jain", title: "veer47003@gmail.com", img: veerimg },
    { name: "Vijay Kant", title: "vijaykantgupta27@gmail.com", img: vijayimg },
    
    { name: "Aashirvad Shukla", title: "ash10pptest@gmail.com", img: asshimg },
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
                <div className="w-40 h-40 rounded-full overflow-hidden bg-card/90 backdrop-blur-sm mb-4 shadow-lg border border-border">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
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
          {/* Contact Form */}
<div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>

  <form
    className="space-y-6"
    onSubmit={async (e) => {
      e.preventDefault(); // prevent redirect
      const form = e.target;
      const formData = new FormData(form);

      // Send data to Formspree
      const response = await fetch("https://formspree.io/f/xdkprzzk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        alert("Message sent successfully! We’ll get back to you soon.");
        form.reset(); // clear all fields
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }}
  >
    <div className="text-left">
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" placeholder="Your name" className="mt-2" required />
    </div>
    <div className="text-left">
      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" type="email" placeholder="your.email@example.com" className="mt-2" required />
    </div>
    <div className="text-left">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" name="message" placeholder="Your message..." className="mt-2 min-h-[120px]" required />
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
