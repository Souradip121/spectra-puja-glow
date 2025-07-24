import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-durga-gold via-durga-cream to-background" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 sm:pt-32 pb-16 sm:pb-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-up space-y-0">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20">
            <span className="text-base sm:text-lg font-medium text-primary">
              Official Travel Partner for{" "}
              <span style={{ color: "#FF3D00" }}>massArt</span>
            </span>
          </div>

          {/* Hero Image */}
          <div className="w-full flex justify-center -mt-6">
            <img
              src="/src/assets/Hero.png"
              alt="Durga Puja Art 2025"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
