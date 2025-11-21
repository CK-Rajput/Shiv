import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Train, Coffee, Landmark, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const industries = [
  {
    title: "BFSI",
    subtitle: "Fraud Detection & KYC",
    description: "Prevent fraud, verify customer identity, and ensure secure transactions with real-time facial recognition.",
    tags: ["KYC Verification", "Fraud Detection", "Access Control", "Transaction Security"],
    icon: <Building2 className="w-6 h-6 text-white" />,
    image: "/bfsi.jpg",
    color: "from-purple-600/90 to-blue-900/90"
  },
  {
    title: "Healthcare",
    subtitle: "Patient Safety & Security",
    description: "Enhance patient safety, track visitors, and secure restricted areas with automated monitoring.",
    tags: ["Patient ID", "Visitor Tracking", "Area Access", "Staff Monitor"],
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    image: "/healthcare.jpg",
    color: "from-pink-600/90 to-purple-900/90"
  },
  {
    title: "Railways",
    subtitle: "Public Safety",
    description: "Monitor large crowds, detect suspicious activities, and enhance public safety in transit hubs.",
    tags: ["Crowd Monitor", "Threat Detect", "Lost Person", "Analytics"],
    icon: <Train className="w-6 h-6 text-white" />,
    image: "/railways.jpg",
    color: "from-rose-600/90 to-pink-900/90"
  },
  {
    title: "Retail & Cafes",
    subtitle: "Customer Experience",
    description: "Improve customer service, prevent theft, and analyze foot traffic patterns.",
    tags: ["Analytics", "Loss Prevention", "Queue Manage", "VIP Recognize"],
    icon: <Coffee className="w-6 h-6 text-white" />,
    image: "/retail.jpg",
    color: "from-indigo-600/90 to-slate-900/90"
  },
  {
    title: "Government",
    subtitle: "Enhanced Security",
    description: "Secure government facilities, monitor public spaces, and detect potential threats.",
    tags: ["Border Control", "Facility Secure", "Event Monitor", "Watchlist"],
    icon: <Landmark className="w-6 h-6 text-white" />,
    image: "/government.jpg",
    color: "from-blue-600/90 to-slate-900/90"
  },
  {
    title: "Private Enterprises",
    subtitle: "Access Control",
    description: "Streamline employee access, track attendance, and secure your workplace.",
    tags: ["Attendance", "Access Manage", "Visitor Register", "Security"],
    icon: <Briefcase className="w-6 h-6 text-white" />,
    image: "/office.jpg",
    color: "from-emerald-600/90 to-teal-900/90"
  }
];

export const Industries = () => {
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
              Sectors
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Tailored solutions for every sector
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} mix-blend-multiply z-10`}></div>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {industry.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>

                  <h3 className="text-2xl font-bold text-white mb-1">{industry.title}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-4">{industry.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {industry.tags.map((tag, tagIndex) => (
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
