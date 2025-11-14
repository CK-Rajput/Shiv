import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Machine Learning",
      icon: "🧠",
      description: "Custom ML models that learn from your data to make intelligent predictions and automate decision-making processes.",
      details: "We build tailored machine learning solutions that integrate seamlessly with your business workflows and deliver measurable results.",
    },
    {
      title: "Natural Language Processing",
      icon: "💭",
      description: "Advanced NLP solutions for chatbots, sentiment analysis, and automated text processing.",
      details: "Our NLP expertise enables intelligent text understanding, language translation, and conversation systems.",
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "Image and video analysis solutions for quality control, object detection, and visual recognition.",
      details: "Leverage visual intelligence to automate inspections, enhance security, and unlock insights from visual data.",
    },
    {
      title: "Predictive Analytics",
      icon: "📈",
      description: "Data-driven insights and forecasting to help you make informed business decisions.",
      details: "Our predictive models help you anticipate market trends, customer behavior, and business opportunities.",
    },
    {
      title: "Process Automation",
      icon: "⚙️",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks.",
      details: "We automate repetitive processes, freeing your team to focus on strategic initiatives.",
    },
    {
      title: "AI Security",
      icon: "🔒",
      description: "Advanced security solutions powered by AI to protect your business from emerging threats.",
      details: "Protect your business with AI-powered threat detection and prevention systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />

      <section className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="section-title dark:text-white">Our Services</h1>
          <p className="section-subtitle dark:text-gray-300">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)" }}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 transition-all"
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
              <p className="text-gray-600 dark:text-gray-500 text-sm">{service.details}</p>
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
          Why Choose Our Services?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            { emoji: "⚡", title: "Fast Implementation", desc: "Quick deployment of AI solutions with minimal disruption to your operations." },
            { emoji: "📊", title: "Measurable Results", desc: "Transparent metrics and KPIs to track the impact of our AI solutions." },
            { emoji: "🎯", title: "Expert Support", desc: "Dedicated support team available 24/7 to ensure your success." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {item.emoji}
              </motion.div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
