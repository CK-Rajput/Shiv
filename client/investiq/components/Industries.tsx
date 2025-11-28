import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Activity, Scale, ShoppingBag, Factory, Cpu, Building2, Plane } from 'lucide-react';

const industries = [
    {
        title: "Financial Services",
        description: "Market analysis, risk assessment, and regulatory compliance across global markets.",
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        color: "bg-teal-900/50 border-teal-500/30 hover:border-teal-400/50"
    },
    {
        title: "Healthcare & Life Sciences",
        description: "Clinical research, patient data analysis, and pharmaceutical intelligence.",
        icon: <Activity className="w-8 h-8 text-white" />,
        color: "bg-rose-900/50 border-rose-500/30 hover:border-rose-400/50"
    },
    {
        title: "Legal & Compliance",
        description: "Contract analysis, case law research, and regulatory monitoring.",
        icon: <Scale className="w-8 h-8 text-white" />,
        color: "bg-indigo-900/50 border-indigo-500/30 hover:border-indigo-400/50"
    },
    {
        title: "Retail & E-Commerce",
        description: "Customer insights, inventory optimization, and market trend prediction.",
        icon: <ShoppingBag className="w-8 h-8 text-white" />,
        color: "bg-purple-900/50 border-purple-500/30 hover:border-purple-400/50"
    },
    {
        title: "Manufacturing",
        description: "Supply chain intelligence, quality control, and predictive maintenance.",
        icon: <Factory className="w-8 h-8 text-white" />,
        color: "bg-amber-900/50 border-amber-500/30 hover:border-amber-400/50"
    },
    {
        title: "Technology & SaaS",
        description: "Product analytics, user behavior insights, and competitive intelligence.",
        icon: <Cpu className="w-8 h-8 text-white" />,
        color: "bg-blue-900/50 border-blue-500/30 hover:border-blue-400/50"
    },
    {
        title: "Real Estate",
        description: "Property valuation, market trends, and investment opportunity analysis.",
        icon: <Building2 className="w-8 h-8 text-white" />,
        color: "bg-slate-800/50 border-slate-500/30 hover:border-slate-400/50"
    },
    {
        title: "Travel & Hospitality",
        description: "Demand forecasting, customer sentiment, and operational optimization.",
        icon: <Plane className="w-8 h-8 text-white" />,
        color: "bg-sky-900/50 border-sky-500/30 hover:border-sky-400/50"
    }
];

export const Industries = () => {
    return (
        <section className="py-24 bg-[#0f0a1e] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 px-4 py-1">
                        Sectors
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Tailored solutions for diverse industries with domain-specific intelligence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group ${industry.color}`}
                        >
                            <div className="mb-6">{industry.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {industry.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
