
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Welcome toast when page loads
    /*setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my projects and get in touch.",
        duration: 5000,
      });
    }, 1000);*/
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-orange-600 text-white overflow-x-hidden">
      <div className="dynamic-background fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-black to-orange-600 opacity-80"></div>
      
      <Navbar />
      
      <main className="container mx-auto">
        <HomeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
