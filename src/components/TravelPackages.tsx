import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Users, MapPin } from "lucide-react";
import durgaExpressImg from "@/assets/durga-express.jpg";
import heritagePujaImg from "@/assets/heritage-puja.jpg";
import riverCruiseImg from "@/assets/river-cruise.jpg";

const TravelPackages = () => {
  const mainPackages = [
    {
      title: "3 Nights & 4 Days",
      dates: "18-22 September 2025",
      features: [
        "An extensive cultural deep dive into durga puja and kolkata's soul",
        "Passionate Art and heritage enthusiasts looking for immersive storytelling",
      ],
      image: durgaExpressImg,
      pdf: "/pdfs/3n.pdf",
    },
    {
      title: "2 Nights & 3 Days",
      dates: "18-22 September 2025",
      features: [
        "Well-rounded journey blending Art, tradition and curated experiences",
        "Curious travelers balancing time with a love for culture and tradition",
      ],
      image: durgaExpressImg,
      pdf: "/pdfs/2n.pdf",
    },
    {
      title: "1 Night & 2 Days",
      dates: "18-22 September 2025",
      features: [
        "A quick yet immersive glimpse into kolkata's artistic celebrations",
        "Urban explorers, seeking a guided puja experience",
      ],
      image: durgaExpressImg,
      pdf: "/pdfs/1n.pdf",
    },
  ];

  const packages = [
    {
      title: "CRUISING INTO PUJA -A MAHALAYA SPECIAL",
      dates: "Sunday, 21 September 2025",
      description: "Hooghly River Cruise & Heritage Tour.",
      features: [
        "A river cruise with performances, stories & a Bengali lunch.",
      ],
      icon: Users,
      image: heritagePujaImg,
    },
    {
      title: "DURGA PREVIEW EXPRESS",
      dates: "18-22 September 2025",
      description:
        "An exclusive overnight bus tour of Kolkata's 10 finest Durga Puja installations.",
      features: [
        "Hooghly River cruise",
        "Heritage tour included",
        "Cultural performances",
        "Traditional Bengali lunch",
      ],
      icon: MapPin,
      image: riverCruiseImg,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect Durga Puja experience with our specially curated
            travel packages.
          </p>
        </div>

        {/* Main packages row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainPackages.map((pkg, index) => {
            return (
              <Card
                key={index}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{pkg.title}</h3>
                  </div>
                </div>

                <CardHeader className="text-center pt-4 pb-2">
                  <div className="text-sm text-durga-red flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {pkg.dates}
                  </div>
                </CardHeader>

                <CardContent className="px-4 pb-4 flex flex-col justify-between flex-1">
                  <div>
                    <ul className="space-y-1 mb-4 text-sm">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-durga-gold rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-durga-gold hover:bg-durga-gold/90 text-white mt-auto"
                    size="lg"
                    onClick={() => window.open(pkg.pdf, "_blank")}
                  >
                    Get Info
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subtle divider */}
        <div className="w-full h-px bg-border mb-12"></div>

        {/* Additional packages row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={index}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>
                </div>

                <CardHeader className="text-center pt-4 pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-durga-gold/10 rounded-full mb-2 mx-auto">
                    <IconComponent className="h-6 w-6 text-durga-gold" />
                  </div>
                  <div className="text-sm text-durga-red flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {pkg.dates}
                  </div>
                </CardHeader>

                <CardContent className="px-4 pb-4 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground text-center mb-2">
                    {pkg.description}
                  </p>
                  <ul className="space-y-1 mb-4 text-sm">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-durga-gold rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-durga-gold hover:bg-durga-gold/90 text-white mt-auto"
                    size="lg"
                    onClick={() => window.open(pkg.image, "_blank")}
                  >
                    View Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default TravelPackages;
