import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks";

export default function About() {
  const { ref } = useIntersectionObserver({ triggerOnce: true });

  const stats = [
    { label: "Projects Completed", value: "50+", icon: "🎯" },
    { label: "Client Satisfaction", value: "98%", icon: "⭐" },
    { label: "Support Available", value: "24+", icon: "🕐" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />

      <section className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title dark:text-white">About Maheshwara.ai</h1>
          <p className="section-subtitle dark:text-gray-300">
            Empowering businesses through intelligent automation, Agentic AI,
            and Generative AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Leading the AI Revolution
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              At Maheshwara.ai, we specialize in creating intelligent solutions
              that transform how businesses operate. Our team of AI experts and
              data scientists work tirelessly to deliver cutting-edge
              technologies including Agentic AI and Generative AI that drive
              real results.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We believe in the power of artificial intelligence to solve
              complex business challenges and accelerate growth. Our commitment
              to innovation and excellence ensures that our clients receive
              solutions that are not just advanced, but also practical and
              immediately impactful.
            </p>

            <motion.div
              className="grid grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary dark:bg-primary rounded-lg p-8 text-white flex flex-col items-center justify-center min-h-96"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🤖
            </motion.div>
            <h3 className="text-2xl font-bold">AI Technology</h3>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
