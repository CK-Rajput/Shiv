import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight } from 'lucide-react';

export const FloatingMockups = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent py-20">
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Text Content (Left side) */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-purple-500/30 bg-purple-500/10 text-purple-200 px-4 py-2 gap-2 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Next-Gen AI Security
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Recognition</span> <br />
              System
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
              Powered by Maheshwara.ai - Advanced facial recognition, pose detection, and real-time analytics. Secure every space with AI that never sleeps.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 px-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 text-base flex items-center gap-2"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3 px-6 h-14 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-200 font-medium">System Online</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "99.9%", label: "99.9% Accuracy Rate" },
                { value: "< 100ms", label: "<100ms Response Time" },
                { value: "24/7", label: "24/7 Monitoring" }
              ].map((stat, index) => (
                <div key={index} className="bg-[#1a1033]/80 border border-purple-500/20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-200 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Floating Mockup (Right side) */}
        <motion.div
          className="flex-1 w-full max-w-md perspective-1000 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Device Frame */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 border-slate-800 bg-black shadow-2xl"
          >
            {/* Screen Content */}
            <div className="absolute inset-0 bg-[#050505] flex flex-col p-6">

              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-[10px] font-medium text-red-400 tracking-wider">REC</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  <span className="text-[10px] font-medium text-gray-400">CAM-01</span>
                </div>
              </div>

              {/* Main Detection Area */}
              <div className="relative flex-1 mb-6 overflow-hidden rounded-xl bg-slate-900/50">
                {/* Background Image */}
                <img
                  src="/detection_bg.jpg"
                  alt="Surveillance Feed"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/80"></div>

                <div className="absolute inset-0 border border-purple-500/50 rounded-xl z-10 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]">
                  <div className="absolute -top-2.5 left-4 bg-black/90 backdrop-blur-md px-3 py-0.5 text-[10px] text-purple-400 border border-purple-500/30 rounded-full font-medium tracking-wide shadow-lg shadow-purple-900/20">
                    Detection Active
                  </div>

                  {/* Center Circle & Label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                    <div className="relative w-32 h-32 rounded-2xl border-2 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)] overflow-hidden bg-black/50">
                      <img
                        src="/pose.jpg"
                        alt="Target"
                        className="w-full h-full object-cover opacity-90"
                      />
                      {/* Scanning Line Animation */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 shadow-[0_0_10px_#a855f7] animate-[scan_2s_ease-in-out_infinite]"></div>

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500"></div>
                    </div>

                    <div className="bg-black/60 border border-purple-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
                      <span className="text-xs text-purple-200 font-medium">Person 98%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="space-y-4">
                {/* Activity Row */}
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3 border border-white/5">
                  <span className="text-xs text-gray-400">Activity</span>
                  <span className="text-xs text-green-400 font-medium">Normal</span>
                </div>

                {/* Confidence Bar */}
                <div className="bg-white/5 rounded-lg p-3 border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Confidence</span>
                    <span className="text-purple-400">98%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Faces", value: "1" },
                    { label: "Objects", value: "3" },
                    { label: "Threats", value: "0" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-xs text-gray-300 font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-6 -right-6 bg-[#2d1b4e] border border-purple-500/30 p-4 rounded-2xl shadow-xl z-20"
          >
            <div className="text-2xl font-bold text-white mb-0.5">24/7</div>
            <div className="text-[10px] text-purple-300">Active</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-[#2d1b4e] border border-purple-500/30 p-5 rounded-2xl shadow-xl z-20"
          >
            <div className="text-3xl font-bold text-white mb-0.5">99.9%</div>
            <div className="text-xs text-purple-300">Accuracy</div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
