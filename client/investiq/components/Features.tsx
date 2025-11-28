import React from 'react';
import { motion } from 'framer-motion';
import { Database, BrainCircuit, Zap, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
    {
        title: "Multi-Source Integration",
        description: "Seamlessly aggregate data from databases, APIs, documents, and real-time streams into a unified intelligence layer.",
        icon: <Database className="w-6 h-6 text-white" />,
        color: "bg-blue-600"
    },
    {
        title: "Advanced RAG Architecture",
        description: "Our proprietary retrieval system combines vector search with contextual understanding for unmatched relevance.",
        icon: <BrainCircuit className="w-6 h-6 text-white" />,
        color: "bg-purple-600"
    },
    {
        title: "Real-Time Processing",
        description: "Get instant answers with sub-second query processing across millions of documents and data points.",
        icon: <Zap className="w-6 h-6 text-white" />,
        color: "bg-pink-600"
    },
    {
        title: "Enterprise-Grade Security",
        description: "Bank-level encryption, role-based access control, and full audit trails ensure your data stays protected.",
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        color: "bg-cyan-600"
    },
    {
        title: "Contextual Intelligence",
        description: "Our AI understands nuance, domain context, and relationships to deliver insights that matter.",
        icon: <Layers className="w-6 h-6 text-white" />,
        color: "bg-indigo-600"
    },
    {
        title: "Continuous Learning",
        description: "Self-improving algorithms that get smarter with every query, adapting to your unique business needs.",
        icon: <Sparkles className="w-6 h-6 text-white" />,
        color: "bg-orange-600"
    }
];

export const Features = () => {
    return (
        <section className="py-24 bg-[#0f0a1e] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 px-4 py-1">
                        Core Capabilities
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Powerful Features Built for Scale
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Enterprise-grade capabilities that transform how you interact with information
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-[#151024] border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-[#1a142d]"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
