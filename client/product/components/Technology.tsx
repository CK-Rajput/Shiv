import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Lock, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const technologies = [
  {
    title: "Deep Learning AI",
    subtitle: "Advanced Neural Networks",
    description: "Neural networks trained on millions of images to achieve human-level recognition accuracy.",
    tags: ["Computer Vision", "Self-Learning", "High Accuracy", "Neural Nets"],
    icon: <Brain className="w-6 h-6 text-white" />,
    image: "/ai_brain.jpg",
    color: "from-purple-600/90 to-indigo-900/90"
  },
  {
    title: "Scalable Database",
    subtitle: "High Performance Storage",
    description: "Distributed database architecture capable of storing and matching millions of facial profiles in milliseconds.",
    tags: ["Cloud Native", "Sharding", "Real-time", "High Availability"],
    icon: <Database className="w-6 h-6 text-white" />,
    image: "/database.jpg",
    color: "from-pink-600/90 to-rose-900/90"
  },
  {
    title: "Encrypted & Secure",
    subtitle: "Enterprise Grade Security",
    description: "Military-grade end-to-end encryption ensuring your data remains private and compliant with global standards.",
    tags: ["AES-256", "GDPR Compliant", "Privacy First", "End-to-End"],
    icon: <Lock className="w-6 h-6 text-white" />,
    image: "/security_lock.jpg",
    color: "from-emerald-600/90 to-teal-900/90"
  },
  {
    title: "Edge Computing",
    subtitle: "Distributed Processing",
    description: "Process data locally on edge devices for ultra-low latency and reduced bandwidth usage.",
    tags: ["Low Latency", "Offline Capable", "Edge AI", "Bandwidth Efficient"],
    icon: <Cpu className="w-6 h-6 text-white" />,
    image: "/chip.jpg",
    color: "from-blue-600/90 to-cyan-900/90"
  }
];

export const Technology = () => {
  return (
    <section className="py-24 bg-[#0f0a1e] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 px-4 py-1">
              Technology Stack
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Cutting-Edge Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Industry-leading AI infrastructure
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} mix-blend-multiply z-10`}></div>
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {tech.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

                  <h3 className="text-2xl font-bold text-white mb-1">{tech.title}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-4">{tech.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tech.tags.map((tag, tagIndex) => (
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
