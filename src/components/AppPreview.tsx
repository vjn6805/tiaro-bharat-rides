import { Smartphone } from "lucide-react";

const AppPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experience the Future of Shared Travel
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Our app is launching soon on Android & iOS. Stay tuned!
          </p>

          <div className="relative inline-block">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 shadow-2xl">
              <div className="bg-card rounded-2xl p-8 shadow-lg max-w-sm mx-auto">
                <Smartphone className="w-48 h-48 mx-auto text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  Beautiful, intuitive interface designed for seamless carpooling experience
                </p>
                <div className="flex gap-4 justify-center">
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <p className="text-sm font-medium text-muted-foreground">Android</p>
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <p className="text-sm font-medium text-muted-foreground">iOS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://www.linkedin.com/company/tiarorides/posts/?feedView=all', '_blank')}
            >
              Join Beta Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
