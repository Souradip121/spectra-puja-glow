import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { type EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

// Import carousel images
import carousel1 from "@/assets/carousel/1.webp";
import carousel2 from "@/assets/carousel/2.webp";
import carousel3 from "@/assets/carousel/3.webp";
import carousel4 from "@/assets/carousel/4.webp";
import carousel5 from "@/assets/carousel/5.webp";
import carousel6 from "@/assets/carousel/6.webp";
import carousel7 from "@/assets/carousel/7.webp";
import carousel8 from "@/assets/carousel/8.webp";
import carousel9 from "@/assets/carousel/9.webp";
import carousel10 from "@/assets/carousel/10.webp";
import carousel11 from "@/assets/carousel/11.webp";
import carousel12 from "@/assets/carousel/12.webp";
import carousel13 from "@/assets/carousel/13.webp";

const Gallery = () => {
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
    carousel9,
    carousel10,
    carousel11,
    carousel12,
    carousel13,
  ];

  return (
    <section id="gallery" className="py-20 bg-durga-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant colors and artistic beauty of Durga Puja
            through our curated gallery
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
