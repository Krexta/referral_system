import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Check, Clock, Users, DollarSign, Target } from "lucide-react";

export default function PresaleSection() {
  return (
    <section id="presale" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Stone Token Presale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Join the exclusive presale and be part of the TON Chain DeFi revolution
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Presale Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white">Presale Progress</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">$1.2M</div>
                    <div className="text-blue-200">of $2M goal</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white/20 rounded-full h-4 mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-4 rounded-full" style={{width: '60%'}}></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-white">Phase 2</div>
                    <div className="text-blue-200 text-sm">Current Phase</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">$0.08</div>
                    <div className="text-blue-200 text-sm">Token Price</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">850</div>
                    <div className="text-blue-200 text-sm">Participants</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">15 days</div>
                    <div className="text-blue-200 text-sm">Time Left</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Presale Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Presale Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>50% bonus tokens</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>Early access to features</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>VIP community access</span>
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>No vesting period</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Participation Instructions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">How to Participate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Connect Wallet</h4>
                  <p className="text-blue-200">Connect your TON compatible wallet to participate in the presale</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Choose Amount</h4>
                  <p className="text-blue-200">Select your investment amount. Minimum XX TON, maximum XXXX TON</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Confirm Purchase</h4>
                  <p className="text-blue-200">Review and confirm your transaction to receive LMX(Stone, Wainui Tokens)</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-primary px-8 py-4 text-lg font-bold transition-all duration-200 hover:scale-105">
                  <Rocket className="w-5 h-5 mr-2" />
                  Join Presale Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
