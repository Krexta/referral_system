import { motion } from "framer-motion";
import { Target, Cog, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About LMX
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                LMX represents the next evolution in decentralized finance on the TON Chain. Our mission is to create a comprehensive ecosystem that brings together various jetton tokens, secure wallets, and seamless exchange capabilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're building the infrastructure that connects New Zealand people and businesses to the future of finance, providing tools that are not just powerful, but accessible and user-friendly.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To democratize access to DeFi services while maintaining the highest standards of security and user experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cog className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Stack</h3>
                  <p className="text-gray-600">Built on the robust TON Chain infrastructure, ensuring fast transactions, low fees, and unparalleled security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                  <p className="text-gray-600">Designed specifically with New Zealand users in mind, providing localized solutions and support.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4 p-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: Math.random() * 10 - 5 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`h-${16 + (i % 3) * 4} bg-gradient-to-br from-primary/${30 + (i % 3) * 20} to-accent/${40 + (i % 3) * 20} rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
