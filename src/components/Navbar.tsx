import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");
      
      const scrollPosition = window.scrollY + 100;
      
      if (
        homeSection &&
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < (portfolioSection?.offsetTop || 0)
      ) {
        setActiveSection("home");
      } else if (
        portfolioSection &&
        scrollPosition >= portfolioSection.offsetTop &&
        scrollPosition < (contactSection?.offsetTop || 0)
      ) {
        setActiveSection("portfolio");
      } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection("contact");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 py-4 px-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div 
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="text-white" size={24} />
        </div>
        
        <ul className={`flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-4 items-center transition-all duration-300 ${
          isMenuOpen ? "md:relative absolute top-16 left-0 w-full bg-black/90 p-4 space-y-4" : "md:relative relative md:flex hidden"
        }`}>
          <li>
            <button 
              onClick={() => scrollToSection("home")}
              className={`text-lg font-bold hover:text-orange-400 transition-colors ${activeSection === "home" ? "text-orange-400" : "text-white"}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className={`text-lg font-bold hover:text-orange-400 transition-colors ${activeSection === "portfolio" ? "text-orange-400" : "text-white"}`}
            >
              Portfolio
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`text-lg font-bold hover:text-orange-400 transition-colors ${activeSection === "contact" ? "text-orange-400" : "text-white"}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
