import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Camera, MapPin, Clock, Users } from "lucide-react";
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
      title: "Premium Locations",
      description:
        "Access to 24 exclusive Durga Puja installations including famous Bonedi Bari",
    },
    {
      icon: Clock,
      title: "VIP Access",
      description:
        "Skip the crowds with early morning and exclusive viewing times",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description:
        "Professional photography guidance at the most photogenic locations",
    },
    {
      icon: Users,
      title: "Cultural Shows",
      description:
        "Daytime cultural showcases and traditional Bengali performances",
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
            <h3 className="text-2xl font-semibold text-foreground">
              What's Included
            </h3>
            {tourHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
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
    </section>
  );
};

export default TourPointers;
