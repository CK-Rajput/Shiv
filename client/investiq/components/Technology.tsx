import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Server, Shield, Cpu, Code2, Database, Lock } from 'lucide-react';

const techStack = [
    {
        title: "Multi-Model AI Support",
        description: "Flexible integration with leading LLMs like Gemini, OpenAI, and Claude for advanced reasoning.",
        icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Vector Database Agnostic",
        description: "Compatible with any high-performance vector database for efficient semantic retrieval and storage.",
        icon: <Database className="w-6 h-6 text-purple-400" />
    },
    {
        title: "LangChain",
        description: "Robust orchestration framework for complex LLM workflows and data pipelines.",
        icon: <Code2 className="w-6 h-6 text-green-400" />
    },
    {
        title: "React/TypeScript",
        description: "Modern, responsive frontend interfaces for seamless user interaction.",
        icon: <Server className="w-6 h-6 text-orange-400" />
    },
    {
        title: "Enterprise Security",
        description: "End-to-end encryption and compliance with global data protection standards.",
        icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
        title: "Scalable Infrastructure",
        description: "Cloud-native architecture designed to handle millions of requests reliably.",
        icon: <Lock className="w-6 h-6 text-cyan-400" />
    }
];

export const Technology = () => {
    return (
        <section className="py-24 bg-[#0f0a1e] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 px-4 py-1">
                        Powered By Industry Leaders
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Built on Enterprise-Grade Infrastructure
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our technology stack combines the best-in-class AI models, databases, and security frameworks to deliver unmatched performance and reliability
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                                {tech.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {tech.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
