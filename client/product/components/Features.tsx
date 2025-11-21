import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Activity, Users, ShieldAlert, Clock, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    title: "Facial Recognition",
    subtitle: "High Precision Matching",
    description: "Advanced AI-powered facial recognition with 99.9% accuracy. Match faces against databases in milliseconds.",
    tags: ["99.9% Accuracy", "Deep Learning", "Milliseconds", "Face Match"],
    icon: <ScanFace className="w-6 h-6 text-white" />,
    image: "/facial_rec.jpg",
    color: "from-purple-600/90 to-blue-900/90"
  },
  {
    title: "Pose Detection",
    subtitle: "Behavioral Analysis",
    description: "Real-time pose and body language analysis to detect suspicious activities and unusual behaviors.",
    tags: ["Real-time", "Body Language", "Suspicious Activity", "AI Analysis"],
    icon: <Activity className="w-6 h-6 text-white" />,
    image: "/pose.jpg",
    color: "from-pink-600/90 to-purple-900/90"
  },
  {
    title: "Headcount & Tracking",
    subtitle: "Crowd Analytics",
    description: "Accurate people counting and crowd monitoring. Track movement patterns and occupancy in real-time.",
    tags: ["People Counting", "Occupancy", "Movement", "Heatmaps"],
    icon: <Users className="w-6 h-6 text-white" />,
    image: "/people_count.jpg",
    color: "from-rose-600/90 to-pink-900/90"
  },
  {
    title: "Illegal Activity Monitoring",
    subtitle: "Threat Prevention",
    description: "Detect and alert on suspicious behaviors, unauthorized access, and potential security breaches instantly.",
    tags: ["Instant Alerts", "Breach Detect", "Unauthorized Access", "Security"],
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
    image: "/security_cam.jpg",
    color: "from-indigo-600/90 to-blue-900/90"
  },
  {
    title: "24/7 Real-time Processing",
    subtitle: "Continuous Surveillance",
    description: "Continuous monitoring with instant alerts and notifications. Process thousands of faces per second.",
    tags: ["Always On", "Instant Notification", "High Throughput", "Reliable"],
    icon: <Clock className="w-6 h-6 text-white" />,
    image: "/detection_bg.jpg",
    color: "from-fuchsia-600/90 to-purple-900/90"
  },
  {
    title: "Lightning Fast",
    subtitle: "Low Latency Performance",
    description: "Sub-second processing speeds with optimized algorithms. Minimal latency for critical security operations.",
    tags: ["Sub-second", "Optimized", "Edge Computing", "Fast Response"],
    icon: <Zap className="w-6 h-6 text-white" />,
    image: "/fiber_optic.jpg",
    color: "from-violet-600/90 to-indigo-900/90"
  }
];

export const Features = () => {
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
              Core Capabilities
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Powerful Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive AI-powered security solution
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} mix-blend-multiply z-10`}></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

                  <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-4">{feature.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
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
