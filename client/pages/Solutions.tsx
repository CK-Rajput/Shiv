import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      title: "Manufacturing",
      icon: "🏭",
      description:
        "Quality control, predictive maintenance, and supply chain optimization powered by AI.",
      benefits: [
        "Reduce defects by up to 90%",
        "Predict equipment failures before they happen",
        "Optimize production scheduling",
      ],
    },
    {
      title: "Finance",
      icon: "🏦",
      description:
        "Fraud detection, risk assessment, and algorithmic trading solutions.",
      benefits: [
        "Real-time fraud detection",
        "Improved risk assessment accuracy",
        "Automated trading strategies",
      ],
    },
    {
      title: "Healthcare",
      icon: "❤️",
      description:
        "Medical imaging analysis, drug discovery, and patient care optimization.",
      benefits: [
        "Faster diagnosis with higher accuracy",
        "Accelerated drug discovery",
        "Improved patient outcomes",
      ],
    },
    {
      title: "Education",
      icon: "🎓",
      description:
        "Personalized learning, automated grading, and educational content generation.",
      benefits: [
        "Personalized learning paths",
        "Reduced grading time by 70%",
        "Enhanced student engagement",
      ],
    },
    {
      title: "E-commerce",
      icon: "🛒",
      description:
        "Personalized recommendations, inventory management, and customer behavior analysis.",
      benefits: [
        "Increase sales by 40%",
        "Optimize inventory levels",
        "Improve customer lifetime value",
      ],
    },
    {
      title: "Banking",
      icon: "🏛️",
      description:
        "Risk management, fraud detection, credit scoring, and automated financial advisory services with AI.",
      benefits: [
        "Reduce fraud losses significantly",
        "Improve credit scoring accuracy",
        "Automate compliance checks",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />

      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title dark:text-white">Industry Solutions</h1>
          <p className="section-subtitle dark:text-gray-300">
            Tailored AI solutions designed for specific industry challenges and
            opportunities
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)",
              }}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {solution.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {solution.description}
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Key Benefits:
              </h4>
              <ul className="space-y-2">
                {solution.benefits.map((benefit, bidx) => (
                  <motion.li
                    key={bidx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: bidx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-container bg-blue-50 dark:bg-slate-800 transition-colors">
        <motion.h2
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="section-subtitle dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's discuss how our AI solutions can help you achieve your business
          goals
        </motion.p>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
