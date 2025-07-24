import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Star, Shield, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Exclusive Access",
      description:
        "VIP access to premium Durga Puja installations and heritage locations",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description:
        "Local cultural experts who bring stories and traditions to life",
    },
    {
      icon: Star,
      title: "Authentic Experiences",
      description:
        "Genuine cultural immersion with traditional ceremonies and cuisine",
    },
    {
      icon: Award,
      title: "Premium Comfort",
      description:
        "Carefully selected accommodations and private transportation",
    },
    {
      icon: MapPin,
      title: "Small Groups",
      description:
        "Intimate group sizes for personalized attention and experience",
    },
    {
      icon: Globe,
      title: "Cultural Insight",
      description:
        "Deep dive into Bengali art, history, and spiritual traditions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-durga-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
          <div className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            <p>
              At SPECTRA, we create events and experiences that span a spectrum
              of ideas, styles and formats. No one-size-fits-all just fresh,
              colourful concepts tailored to every occasion.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Why Choose SPECTRA?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
