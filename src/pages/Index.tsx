import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TravelPackages from "@/components/TravelPackages";
import DurgaPujaArt2025 from "@/components/DurgaPujaArt2025";
import TourPointers from "@/components/TourPointers";
import EnquiryForm from "@/components/EnquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <TravelPackages />
      <DurgaPujaArt2025 />
      <TourPointers />
      <EnquiryForm />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
