import { motion } from "framer-motion";
import { ArrowRightLeft, Store, Shield, Wallet } from "lucide-react";

const features = [
  {
    icon: ArrowRightLeft,
    title: "Multi-Chain Interoperability",
    description: "Seamlessly exchange multiple jettons operating on the TON Chain with zero friction and maximum security.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Store,
    title: "Tokenized Asset Marketplace",
    description: "Trade tokenized assets with fractional ownership capabilities, opening new investment opportunities.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Shield,
    title: "Decentralized VPN (dVPN)",
    description: "Protect your privacy with our peer-to-peer VPN network, ensuring complete anonymity and security.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Wallet,
    title: "Non-Custodial Wallet",
    description: "Maintain complete control over your assets with our secure, multi-blockchain compatible wallet solution.",
    color: "from-orange-500 to-orange-600"
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose LMX?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the powerful features that make Jetton(Stone, Wainui etc) the ultimate DeFi platform on TON Chain
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
