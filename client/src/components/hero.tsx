import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play, BookOpen } from "lucide-react";
import StoneImage from "@/public/logo.png";

export default function HeroSection() {
  const scrollToPresale = () => {
    const element = document.getElementById("presale");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-primary/5 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Rocket className="w-4 h-4 mr-2" />
                Built on TON Chain
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                The Future of
                <span className="gradient-text block">
                  DeFi
                </span>
                on TON Chain
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience seamless multi-chain interoperability, tokenized asset trading, 
                decentralized VPN, and secure non-custodial wallet solutions - all powered by Stone Token.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPresale}
                className="gradient-bg text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105"
              >
                <Play className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToAbout}
                className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$2.4M+</div>
                <div className="text-sm text-gray-600">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Transactions</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative animate-float"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-12"></div>
              <div className="absolute inset-4 bg-gradient-to-l from-primary/30 to-accent/30 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-80 h-80 flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center">
                  <img
                    src={StoneImage}
                    alt="Description"
                    className="w-12 h-12"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">Stone Token</h3>
                  <p className="text-gray-600">TON Chain Native</p>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V14H16V22H8V14H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V14H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
