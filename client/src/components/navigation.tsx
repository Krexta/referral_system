import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gem } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Gem className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LMX</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("presale")} className="text-gray-700 hover:text-primary transition-colors">
                Presale
              </button>
              <button onClick={() => scrollToSection("blog")} className="text-gray-700 hover:text-primary transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </button>
            </div>
            
            {/* <div className="flex items-center space-x-4">
              <Button className="gradient-bg text-white hover:opacity-90">
                Connect Wallet
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection("home")} 
              className="block w-full text-left py-2 text-gray-700 hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block w-full text-left py-2 text-gray-700 hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("features")} 
              className="block w-full text-left py-2 text-gray-700 hover:text-primary"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("presale")} 
              className="block w-full text-left py-2 text-gray-700 hover:text-primary"
            >
              Presale
            </button>
            <button 
              onClick={() => scrollToSection("blog")} 
              className="block w-full text-left py-2 text-gray-700 hover:text-primary"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block w-full text-left py-2 text-gray-700 hover:text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
