import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const CTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#0f0a1e]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-[#1a0b2e]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-pink-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-8 border-white/10 bg-white/5 text-gray-300 px-4 py-2 gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Get Started Today
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Your Security?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-10"
          >
            Join leading organizations who trust Maheshwara.ai for their security needs.
          </motion.p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Email Us</h3>
            <p className="text-xl font-semibold text-white">Support@Maheshwara.ai</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Call Us</h3>
            <p className="text-xl font-semibold text-white">+91-8890502275</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-500">© 2025 Maheshwara.ai. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};
