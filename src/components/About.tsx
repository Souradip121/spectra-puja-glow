import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      title: "Official Travel Partner",
      description:
        "Official Travel Partner of massArt – Get exclusive access to world's biggest public Art festival - Durga Puja.",
    },
    {
      title: "Personal Touch",
      description:
        "From airport pickup to bedtime chai, we plan every detail like a friend would.",
    },
    {
      title: "Beyond Sightseeing",
      description:
        "You won't just see Durga Puja Art, you'll meet the Artisans and team behind these installations.",
    },
    {
      title: "Trusted Partners",
      description:
        "Heritage 5 Star Hotels, reliable Transportation and Culinary partners who love what they serve.",
    },
    {
      title: "Designed for All",
      description:
        "Whether you're a family or a group of friends—we make it magical.",
    },
    {
      title: "Experience Meets Purpose",
      description:
        "Every journey supports local artisans, performers and heritage spaces - travel that gives back.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-durga-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
          <div className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            <p className="mb-4">
              At SPECTRA since 2024, we create events and experiences that span
              a vibrant spectrum of ideas, styles, and formats. There's no
              one-size-fits-all approach — only fresh, colourful concepts
              thoughtfully tailored to every occasion.
            </p>
            <p>
              We're proud to be the official travel partner for the{" "}
              <strong>Preview Show of Durga Puja Art 2025 by massArt</strong> —
              a unique cultural initiative that has been partnered with UNESCO
              for the past three years.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-1 md:mb-8">
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
