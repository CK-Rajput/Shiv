import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Search, FileText, MessageSquare, BarChart3, AlertTriangle, Users } from 'lucide-react';

const useCases = [
    {
        title: "Intelligent Search & Discovery",
        description: "Find relevant information across your entire knowledge base with natural language queries. Our RAG system understands context and delivers precise results instantly.",
        stat: "95% reduction in search time",
        icon: <Search className="w-6 h-6 text-white" />,
        color: "bg-blue-600"
    },
    {
        title: "Document Intelligence",
        description: "Extract insights from contracts, reports, and documents automatically. Summarize, compare, and analyze thousands of documents in seconds.",
        stat: "10,000+ documents processed daily",
        icon: <FileText className="w-6 h-6 text-white" />,
        color: "bg-purple-600"
    },
    {
        title: "Conversational Analytics",
        description: "Ask questions about your data in plain English. Get instant visualizations, trends, and recommendations without writing a single query.",
        stat: "3x faster decision making",
        icon: <MessageSquare className="w-6 h-6 text-white" />,
        color: "bg-pink-600"
    },
    {
        title: "Multi-Source Reporting",
        description: "Consolidate data from CRM, ERP, databases, and APIs into unified, actionable reports. Real-time dashboards that update automatically.",
        stat: "60% time saved on reporting",
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        color: "bg-indigo-600"
    },
    {
        title: "Risk & Anomaly Detection",
        description: "Proactively identify risks, compliance issues, and anomalies across data sources. Get alerted to potential problems before they escalate.",
        stat: "99.2% anomaly detection rate",
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        color: "bg-red-600"
    },
    {
        title: "Customer Intelligence",
        description: "Understand customer behavior, sentiment, and preferences by analyzing interactions across all touchpoints. Drive retention and growth.",
        stat: "40% improvement in satisfaction",
        icon: <Users className="w-6 h-6 text-white" />,
        color: "bg-orange-600"
    }
];

export const UseCases = () => {
    return (
        <section className="py-24 bg-[#0f0a1e] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 px-4 py-1">
                        Real-World Applications
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Proven Use Cases
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how organizations leverage InvestIQ to solve complex challenges
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-[#151024] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-6">
                                <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    {useCase.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm mb-6">
                                        {useCase.description}
                                    </p>
                                    <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-purple-300 text-sm font-medium">
                                        {useCase.stat}
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
