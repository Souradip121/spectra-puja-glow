import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import durgaExpressImg from "@/assets/durga-express.jpg";
import heritagePujaImg from "@/assets/heritage-puja.jpg";
import riverCruiseImg from "@/assets/river-cruise.jpg";

const TravelPackages = () => {
  const packages = [
    {
      title: "Exclusive Travel Packages",
      dates: "18-22 September 2025",
      description:
        "Experience the magic of Durga Puja through Spectra's specially curated guided Art Tours.",
      features: [
        "VIP access to 24 Durga Puja Art installations Bonedi Bari tour",
        "Daytime cultural showcases",
        "Handpicked Culinary experiences",
        "Premium Accommodation and Private Transport",
      ],
      icon: Clock,
      image: durgaExpressImg,
    },
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

  const FirstIcon = packages[0].icon;

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Exclusive Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect Durga Puja experience with our specially curated
            travel packages.
          </p>
        </div>

        <Card className="flex flex-col md:flex-row overflow-hidden mb-12 card-tight">
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-start gap-2 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-durga-gold/10 rounded-full">
                  <FirstIcon className="h-5 w-5 text-durga-gold" />
                </div>
                <div className="text-sm text-durga-red flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {packages[0].dates}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{packages[0].title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {packages[0].description}
              </p>
              <ul className="space-y-1 mb-3 text-sm">
                {packages[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-durga-gold rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-left mb-3">
                <p className="text-sm font-semibold text-durga-red mb-1">
                  Pick your journey
                </p>
                <p className="text-sm text-durga-gold space-x-2">
                  <a href="/pdfs/1n.pdf" className="hover:underline">
                    1 Night & 2 Days
                  </a>{" "}
                  |{" "}
                  <a href="/pdfs/2n.pdf" className="hover:underline">
                    2 Nights & 3 Days
                  </a>{" "}
                  |{" "}
                  <a href="/pdfs/3n.pdf" className="hover:underline">
                    3 Nights & 4 Days
                  </a>
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-durga-gold hover:bg-durga-gold/90 text-white mt-2"
              size="lg"
              onClick={() => window.open(packages[0].image, "_blank")}
            >
              Book Now
            </Button>
          </div>

          <div className="md:w-1/2 w-[30%]">
            <img
              src={packages[0].image}
              alt={packages[0].title}
              className="object-cover max-h-[400px]"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.slice(1).map((pkg, index) => {
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
                    Book Now
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
