import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-durga-gold via-durga-cream to-background" />
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-20 animate-float z-0" />
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-primary rounded-full opacity-15 animate-float z-0"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-muted rounded-full opacity-25 animate-float z-0"
        style={{ animationDelay: "4s" }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 sm:pt-32 pb-16 sm:pb-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">
              Official Travel Partner - massArt
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-foreground">DURGA PUJA</span>
            <br />
            <span className="text-primary">ART 2025</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Experience the magic of Durga Puja through Spectra's specially
            curated guided Art Tours
          </p>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">📅</span>
              <span>18–22 September 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">📍</span>
              <span>Kolkata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">🎨</span>
              <span>World's Biggest Public Art Festival</span>
            </div>
          </div>

          {/* Highlight */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            First look into the world's biggest public art festival, before the
            crowds arrive
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                Explore Packages
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
