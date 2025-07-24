import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Users, MapPin } from "lucide-react";
import heritagePujaImg from "@/assets/heritage-puja.jpg";
import riverCruiseImg from "@/assets/river-cruise.jpg";

const DurgaPujaArt2025 = () => {
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
    <section id="durga-puja-art" className="py-20 bg-durga-cream/10">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Durga Puja Art 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the world's biggest public art festival through our specialized tours and cruises.
          </p>
        </div>

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

export default DurgaPujaArt2025;
