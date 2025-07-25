import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Camera,
  MapPin,
  Clock,
  Users,
  Shield,
  Car,
  Palette,
  Building,
  Ship,
  Utensils,
} from "lucide-react";
import leftImageTourHighlights from "@/assets/leftimageTourHighlights.jpg";

const TourPointers = () => {
  const bonediBariFeatures = [
    "Visit 150+ year old traditional Bengali aristocratic houses",
    "Witness authentic family Durga Puja celebrations",
    "Explore heritage architecture and traditional artwork",
    "Meet local families and hear their ancestral stories",
    "Experience traditional Bengali hospitality",
    "Photography of vintage decorations and heirloom pieces",
  ];

  const tourHighlights = [
    {
      icon: MapPin,
      title: "Private VIP Access",
      description:
        "Private VIP access to 24 handpicked Durga Puja art installations — ahead of public viewing",
    },
    {
      icon: Users,
      title: "Crowd-Free Atmosphere",
      description:
        "A peaceful, crowd-free atmosphere to fully absorb the scale and detail of the artworks",
    },
    {
      icon: Palette,
      title: "Exclusive Artist Interactions",
      description:
        "Exclusive artist interactions — hear directly from the visionaries behind the creations",
    },
    {
      icon: Building,
      title: "Bonedi Bari Visit",
      description:
        "A visit to a Bonedi Bari Puja steeped in history, tradition, and legacy",
    },
    {
      icon: Camera,
      title: "Town Hall Exhibition",
      description:
        "Entry to Kolkata Town Hall for the Making of Durga Puja Art exhibition",
    },
    {
      icon: Ship,
      title: "Luxury River Cruise",
      description:
        "A luxury cruise on the Hooghly River featuring live cultural performances and a heritage tour",
    },
    {
      icon: Utensils,
      title: "Bengali Gastronomic Experience",
      description:
        "A specially curated Bengali gastronomic experience — an exploration of local flavours and stories",
    },
    {
      icon: Clock,
      title: "Heritage Trail",
      description:
        "The Kolkata Kaleidoscope heritage trail and curated city experiences",
    },
    {
      icon: Shield,
      title: "Luxury Accommodation",
      description:
        "Luxury stays at premium hotels, carefully selected for comfort and charm",
    },
    {
      icon: Car,
      title: "Private Transport",
      description:
        "Chauffeured private transport for all experiences and transfers",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tour Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our Durga Puja tours truly special and authentic
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Image */}
          <div className="relative">
            <img
              src={leftImageTourHighlights}
              alt="Tour Highlights"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Tour Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* First Column */}
              <div className="flex flex-col space-y-4">
                {tourHighlights.slice(0, 5).map((highlight, index) => (
                  <Card
                    key={index}
                    className="bg-background border-border hover:shadow-md transition-shadow flex-1"
                  >
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Second Column */}
              <div className="flex flex-col space-y-4">
                {tourHighlights.slice(5, 10).map((highlight, index) => (
                  <Card
                    key={index + 5}
                    className="bg-background border-border hover:shadow-md transition-shadow flex-1"
                  >
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            {highlight.description}
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
      </div>
    </section>
  );
};

export default TourPointers;
