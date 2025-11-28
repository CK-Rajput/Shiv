import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0f0a1e] pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="mb-6 border-purple-500/30 bg-purple-500/10 text-purple-200 px-4 py-2 gap-2 rounded-full inline-flex items-center">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        RAG Powered Intelligence Platform
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Unified Intelligence from <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Multiple Sources</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        InvestIQ harnesses the power of Retrieval-Augmented Generation to deliver precise, contextual insights from diverse data streams in real-time. Experience unparalleled accuracy in analytics.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: <Zap className="w-6 h-6 text-blue-400" />, value: "10x", label: "Faster Insights" },
                            { icon: <Database className="w-6 h-6 text-purple-400" />, value: "99.8%", label: "Accuracy Rate" },
                            { icon: <Sparkles className="w-6 h-6 text-pink-400" />, value: "50+", label: "Data Sources" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="bg-[#1a1033]/80 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-colors"
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <div className="mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
