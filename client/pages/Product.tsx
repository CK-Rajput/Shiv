import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScanFace, LineChart, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductSelection() {
  const navigate = useNavigate();

  const products = [
    {
      id: 'recognition',
      title: 'Intelligent Recognition System',
      description: 'Advanced AI-powered facial recognition, pose detection, and real-time analytics for security and monitoring.',
      icon: <ScanFace className="w-12 h-12 text-purple-400" />,
      gradient: 'from-purple-600 to-pink-600',
      path: '/recognition',
      features: ['99.9% Accuracy', 'Real-time Detection', 'Behavior Analysis']
    },
    {
      id: 'investiq',
      title: 'InvestIQ',
      description: 'Intelligent document analysis and financial intelligence agent powered by RAG and Generative AI.',
      icon: <LineChart className="w-12 h-12 text-blue-400" />,
      gradient: 'from-blue-600 to-cyan-600',
      path: '/investiq',
      features: ['Document Analysis', 'Financial Insights', 'RAG Technology']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Choose Your Solution
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Select the AI-powered platform that best fits your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300"
              >
                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '2px' }} />

                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-8 flex flex-col">
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 w-fit group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {product.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(product.path)}
                    className={`w-full py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r ${product.gradient} opacity-90 hover:opacity-100 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:gap-3`}
                  >
                    Explore Platform
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
