import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Clock, Camera, Users, Shield, Car } from "lucide-react";
import cruisingintopujaImg from "@/assets/cruisingintopuja.png";
import durgapujaexpressImg from "@/assets/durgapujaexpress.png";
import riverCruiseImg from "@/assets/river-cruise.jpg";
import previewExpressDisplayImg from "@/assets/previewexpressdisplay.png";
import img1n2d from "@/assets/1n2d.jpg";
import img2n3d from "@/assets/2n3d.jpg";
import img3n4d from "@/assets/3n4d.jpg";

const DurgaPujaArt2025 = () => {
  const specialPackages = [
    {
      title: "CRUISING INTO PUJA -A MAHALAYA SPECIAL",
      description:
        "Set sail on a heritage-filled cruise along the Hooghly aboard India's last surviving paddle steamer. Enjoy folk performances, storytelling, Bengali cuisine, and a visit to the Riverine Museum. With cultural games, Puja-themed AV showcases and the festive rhythm of Dhakis, this unique experience captures the sights, sound and spirit of Durga Puja—right on the river.",
      features: [],
      image: cruisingintopujaImg,
      displayImage: riverCruiseImg,
    },
    {
      title: "DURGA PREVIEW EXPRESS",
      description:
        "The Durga Preview Express is a curated 10-hour night tour through Kolkata's most spectacular Durga Puja Art installations. Travel in a comfortable AC coach, enjoy a delicious dinner, and explore 10 handpicked pandals. Perfect for Art lovers and festive explorers seeking a safe, crowd-free and immersive cultural experience under the enchanting lights of the Kolkata night.",
      features: [],
      image: durgapujaexpressImg,
      displayImage: previewExpressDisplayImg,
    },
  ];

  const mainPackages = [
    {
      title: "3 Nights & 4 Days",
      installations:
        "24 contemporary installations, 1 Traditional Puja, 1 Bonedi Bari and Kolkata Townhall Exhibition",
      features: [
        "An extensive cultural deep dive into durga puja and kolkata's soul",
        "Ideal for Passionate Art and heritage enthusiasts looking for immersive storytelling",
      ],
      image: img3n4d,
      pdf: "/pdfs/3n.pdf",
    },
    {
      title: "2 Nights & 3 Days",
      installations:
        "15 contemporary installations, 1 Traditional Puja, 1 Bonedi Bari and Kolkata Townhall Exhibition",
      features: [
        "Well-rounded journey blending Art, tradition and curated experiences",
        "For Curious travelers balancing time with a love for culture and tradition",
      ],
      image: img2n3d,
      pdf: "/pdfs/2n.pdf",
    },
    {
      title: "1 Night & 2 Days",
      installations:
        "6 contemporary installations, 1 Traditional Puja, 1 Bonedi Bari and Kolkata Townhall Exhibition",
      features: [
        "A quick yet immersive glimpse into Kolkata's artistic celebrations",
        "For anyone seeking a short, guided Durga Puja experience",
      ],
      image: img1n2d,
      pdf: "/pdfs/1n.pdf",
    },
  ];

  const inclusions = [
    {
      icon: MapPin,
      title: "VIP Access to 24 Installations",
      description:
        "Exclusive access to Kolkata's most iconic Durga Puja art installations before public viewing",
    },
    {
      icon: Clock,
      title: "Special Exhibits Entry",
      description:
        "Entry to Kolkata Town Hall showcase and traditional Bonedi Bari Puja experience",
    },
    {
      icon: Shield,
      title: "Luxury Accommodation",
      description:
        "Handpicked hotels ensuring comfort and convenience throughout your stay",
    },
    {
      icon: Car,
      title: "Private Transport",
      description:
        "Private chauffeured transport throughout the tour for seamless travel",
    },
    {
      icon: Camera,
      title: "Cultural Experiences",
      description:
        "Curated daytime cultural experiences exploring Kolkata's rich heritage, art, and cuisine",
    },
    {
      icon: Users,
      title: "Dedicated massArt Attaché",
      description:
        "Dedicated massArt attaché with every vehicle for seamless on-ground support",
    },
  ];

  return (
    <section id="durga-puja-art" className="py-20 bg-durga-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Durga Puja Art 2025
          </h2>
        </div>

        {/* Left and Right Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Section - Exclusive Travel Packages */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Exclusive Travel Packages
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Experience the Grandeur of Durga Puja — The World's Biggest Public
              Art Festival, before the crowds arrive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Step into the heart of Bengal's cultural magic with an exclusive,
              guided preview tour of Durga Puja between 18th to 22nd September
              2025— before the crowds arrive. Witness Kolkata transform into a
              vast open-air gallery, where art, tradition and storytelling come
              alive.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This one-of-a-kind experience offers rare, green-channel access to
              museum-worthy installations, intimate interactions with master
              artisans and deep insights into Bengal's living heritage.
            </p>
          </div>

          {/* Right Section - What's Included */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              What's Included
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* First Column */}
              <div className="flex flex-col space-y-4">
                {inclusions.slice(0, 3).map((inclusion, index) => (
                  <Card
                    key={index}
                    className="bg-background border-border hover:shadow-md transition-shadow flex-1"
                  >
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                          <inclusion.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">
                            {inclusion.title}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            {inclusion.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Second Column */}
              <div className="flex flex-col space-y-4">
                {inclusions.slice(3, 6).map((inclusion, index) => (
                  <Card
                    key={index + 3}
                    className="bg-background border-border hover:shadow-md transition-shadow flex-1"
                  >
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                          <inclusion.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">
                            {inclusion.title}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            {inclusion.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Packages - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {mainPackages.map((pkg, index) => (
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
                  {pkg.installations}
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
          ))}
        </div>

        {/* Special Packages - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialPackages.map((pkg, index) => (
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
                  {/* {pkg.dates} */}
                </div>
              </CardHeader>

              <CardContent className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {pkg.description}
                  </p>
                  {pkg.features.length > 0 && (
                    <ul className="space-y-1 mb-4 text-sm">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-durga-gold rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Button
                  className="w-full bg-durga-gold hover:bg-durga-gold/90 text-white"
                  size="lg"
                  onClick={() => window.open(pkg.displayImage, "_blank")}
                >
                  View Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DurgaPujaArt2025;
