import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Store, Shield, Wallet, Code, Check, ExternalLink } from "lucide-react";

export default function DetailedFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Platform Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore the comprehensive suite of tools and services that power the LMX
          </motion.p>
        </div>
        
        <div className="space-y-20">
          {/* Token Interoperability Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <ArrowRightLeft className="w-4 h-4 mr-2" />
                Interoperability
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Seamless Token Exchange
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our advanced interoperability protocol enables seamless exchange between multiple jettons operating on the TON Chain. Experience instant swaps with minimal fees and maximum security.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Instant cross-token swaps
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Minimal transaction fees
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Advanced security protocols
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Token Exchange</h4>
                  <ArrowRightLeft className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">STONE</span>
                    <span className="text-gray-600">1,000</span>
                  </div>
                  <div className="text-center">
                    <svg className="w-6 h-6 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">WAINUI</span>
                    <span className="text-gray-600">750</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Marketplace Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 lg:order-1">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Asset Marketplace</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Auckland Property #001</div>
                      <div className="text-sm text-gray-600">$450,000 NZD</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">Available: 25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                <Store className="w-4 h-4 mr-2" />
                Marketplace
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tokenized Asset Trading
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Access fractional ownership of real-world assets through our tokenized marketplace. Trade shares of properties, businesses, and other valuable assets with complete transparency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Fractional asset ownership
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Transparent pricing
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Regulatory compliance
                </li>
              </ul>
            </div>
          </motion.div>

          {/* dVPN and Wallet Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decentralized VPN (dVPN)</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Protect your privacy with our peer-to-peer VPN network. Earn tokens by sharing bandwidth while accessing secure, censorship-resistant internet connectivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Connection Status</span>
                  <span className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Server Location</span>
                  <span className="text-gray-900">Auckland, NZ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tokens Earned</span>
                  <span className="text-primary font-semibold">24.5 STONE</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Custodial Wallet</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Maintain complete control over your assets with our secure, multi-blockchain wallet. Seamlessly manage TON tokens and cross-chain assets from a single interface.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Stone Token</div>
                      <div className="text-sm text-gray-500">STONE</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">1,250.50</div>
                      <div className="text-sm text-gray-500">$3,126.25</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Wainui Token</div>
                      <div className="text-sm text-gray-500">WAINUI</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">520.75</div>
                      <div className="text-sm text-gray-500">$1,562.25</div>
                    </div>
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
