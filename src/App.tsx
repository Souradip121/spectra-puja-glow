import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TravelPackages from "@/components/TravelPackages";
import DurgaPujaArt2025 from "@/components/DurgaPujaArt2025";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

function Main() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <TravelPackages />
      <DurgaPujaArt2025 />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
export { Main };
