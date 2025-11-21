import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, Building2, ShoppingCart, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const useCases = [
  {
    title: "KYC & Fraud Detection",
    subtitle: "Identity Verification",
    description: "Instant customer verification at branches and ATMs. Detect fraudulent transactions in real-time.",
    tags: ["Banking", "Anti-Fraud", "Instant Verify", "Secure"],
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    image: "/security_lock.jpg",
    color: "from-purple-600/90 to-blue-900/90"
  },
  {
    title: "Patient Safety",
    subtitle: "Healthcare Security",
    description: "Accurate patient identification and visitor tracking to ensure hospital security.",
    tags: ["Hospitals", "Patient ID", "Visitor Track", "Safety"],
    icon: <Heart className="w-6 h-6 text-white" />,
    image: "/patient.jpg",
    color: "from-pink-600/90 to-rose-900/90"
  },
  {
    title: "Crowd Management",
    subtitle: "Public Safety",
    description: "Monitor crowd density at stations, airports, and public events for enhanced safety.",
    tags: ["Events", "Airports", "Density Control", "Safety"],
    icon: <Users className="w-6 h-6 text-white" />,
    image: "/crowd.jpg",
    color: "from-rose-600/90 to-red-900/90"
  },
  {
    title: "Access Control",
    subtitle: "Workplace Security",
    description: "Streamline employee access, track attendance, and secure workplace environments.",
    tags: ["Offices", "Employee Entry", "Attendance", "Secure"],
    icon: <Building2 className="w-6 h-6 text-white" />,
    image: "/office.jpg",
    color: "from-purple-600/90 to-indigo-900/90"
  },
  {
    title: "Loss Prevention",
    subtitle: "Retail Security",
    description: "Identify known shoplifters and monitor retail spaces to prevent theft.",
    tags: ["Shops", "Theft Prevent", "Monitoring", "Retail"],
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    image: "/shop.jpg",
    color: "from-violet-600/90 to-purple-900/90"
  },
  {
    title: "Threat Detection",
    subtitle: "Proactive Security",
    description: "Detect suspicious behaviors and identify persons of interest from watchlists.",
    tags: ["Watchlists", "Suspicious Behavior", "Alerts", "Safety"],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    image: "/detection_bg.jpg",
    color: "from-slate-600/90 to-gray-900/90"
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-[#0f0a1e] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 border-purple-500/30 bg-purple-500/10 text-purple-300 px-4 py-1 rounded-full">
              Real-World Applications
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Proven Use Cases
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Practical applications across every industry
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-[#151024] border border-white/10 hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} mix-blend-multiply z-10`}></div>
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

                  <h3 className="text-2xl font-bold text-white mb-1">{useCase.title}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-4">{useCase.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 group-hover:border-purple-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
