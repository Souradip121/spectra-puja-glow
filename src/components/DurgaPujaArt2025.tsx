import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import cruisingintopujaImg from "@/assets/cruisingintopuja.png";
import durgapujaexpressImg from "@/assets/durgapujaexpress.png";

const DurgaPujaArt2025 = () => {
  const packages = [
    {
      title: "CRUISING INTO PUJA -A MAHALAYA SPECIAL",
      dates: "Sunday, 21 September 2025",
      description: "Hooghly River Cruise & Heritage Tour.",
      features: [
        "A river cruise with performances, stories & a Bengali lunch.",
      ],
      image: cruisingintopujaImg,
    },
    {
      title: "DURGA PREVIEW EXPRESS",
      dates: "18-22 September 2025",
      description:
        "An exclusive overnight bus tour of Kolkata's 10 finest Durga Puja installations.",
      features: [
        "Hooghly River cruise, Heritage tour included, Cultural performances, Traditional Bengali lunch",
      ],
      image: durgapujaexpressImg,
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
            Experience the world's biggest public art festival through our
            specialized tours and cruises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => {
            return (
              <Card
                key={index}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>
                </div>

                <CardHeader className="text-center pt-4 pb-2">
                  <div className="text-sm text-durga-red flex items-center justify-center">
                    {pkg.dates}
                  </div>
                </CardHeader>

                <CardContent className="px-4 pb-4 flex flex-col flex-1">
                  <div className="flex-1">
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
                  </div>
                  <Button
                    className="w-full bg-durga-gold hover:bg-durga-gold/90 text-white"
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
