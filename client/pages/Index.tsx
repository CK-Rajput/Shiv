import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks";

export default function Index() {
  const [floatingCards, setFloatingCards] = useState<
    { id: number; delay: number }[]
  >([]);
  const { ref: appRef } = useIntersectionObserver({ triggerOnce: true });

  useEffect(() => {
    setFloatingCards([
      { id: 1, delay: 0 },
      { id: 2, delay: 0.2 },
      { id: 3, delay: 0.4 },
      { id: 4, delay: 0.6 },
      { id: 5, delay: 0.8 },
      { id: 6, delay: 1 },
    ]);
  }, []);

  const aiCapabilities = [
    { title: "Machine Learning", icon: "📊" },
    { title: "Agentic AI", icon: "🤖" },
    { title: "Generative AI", icon: "✨" },
    { title: "NLP", icon: "💬" },
    { title: "Cloud", icon: "☁️" },
    { title: "Computer Vision", icon: "👁️" },
  ];

  const realWorldApplications = [
    {
      title: "Customer Service Automation",
      description:
        "AI agents handling customer inquiries, routing requests, and resolving issues autonomously.",
    },
    {
      title: "Financial Trading",
      description:
        "Intelligent trading systems making split-second decisions based on market conditions and risk parameters.",
    },
    {
      title: "Resource Management",
      description:
        "Autonomous systems optimizing resource allocation, energy consumption, and operational efficiency.",
    },
    {
      title: "Personalized Marketing & Sales",
      description:
        "AI-driven platforms analyzing customer data to deliver hyper-personalized marketing campaigns, optimize sales funnels, and enhance customer engagement.",
    },
    {
      title: "Healthcare & Medical Diagnosis",
      description:
        "AI agents analyzing medical issues, patient data, and symptoms to assist doctors in diagnosis, treatment planning, and drug discovery.",
    },
    {
      title: "Smart Manufacturing & Quality Control",
      description:
        "Autonomous systems monitoring production lines, detecting defects in real-time, and optimizing manufacturing processes for maximum efficiency.",
    },
  ];

  const generationCapabilities = [
    {
      title: "Content Generation",
      icon: "✍️",
      description:
        "Create high-quality text, images, videos, and multimedia content automatically using advanced AI models.",
    },
    {
      title: "Code Generation",
      icon: "💻",
      description:
        "Automatically generate, optimize, and debug code across multiple programming languages and frameworks.",
    },
    {
      title: "Image & Video Creation",
      icon: "🎥",
      description:
        "Generate stunning visuals, animations, and video content tailored to your brand and requirements.",
    },
    {
      title: "Creative Media",
      icon: "🎵",
      description:
        "Produce original music, sound effects, and audio content for various platforms.",
    },
    {
      title: "Document Generation",
      icon: "📄",
      description:
        "Automatically create reports, proposals, documentation, and other business documents.",
    },
    {
      title: "Personalized Content",
      icon: "👤",
      description:
        "Generate customized content that adapts to user preferences, behavior, and specific requirements.",
    },
  ];

  const industryApplications = [
    {
      title: "Marketing & Advertising",
      description:
        "Create compelling ad copy, social media content, and marketing materials that resonate with your target audience.",
    },
    {
      title: "Product Development",
      description:
        "Generate product descriptions, user manuals, and technical documentation to accelerate development cycles.",
    },
    {
      title: "Education & Training",
      description:
        "Develop interactive learning materials, quizzes, and educational content personalized for different learning styles.",
    },
    {
      title: "Creative Industries",
      description:
        "Produce original artwork, music, stories, and creative content for entertainment and artistic applications.",
    },
    {
      title: "Legal & Compliance",
      description:
        "Generate legal documents, contracts, compliance reports, and automated legal research to streamline law firm operations.",
    },
    {
      title: "E-commerce & Retail",
      description:
        "Create product catalogs, customer reviews, personalized recommendations, and dynamic pricing strategies using AI-generated content.",
    },
  ];

  const industrySolutions = [
    {
      title: "Manufacturing",
      icon: "🏭",
      description:
        "Quality control, predictive maintenance, and supply chain optimization powered by AI.",
    },
    {
      title: "Finance",
      icon: "🏦",
      description:
        "Fraud detection, risk assessment, and algorithmic trading solutions.",
    },
    {
      title: "Healthcare",
      icon: "❤️",
      description:
        "Medical imaging analysis, drug discovery, and patient care optimization.",
    },
    {
      title: "Education",
      icon: "🎓",
      description:
        "Personalized learning, automated grading, and educational content generation.",
    },
    {
      title: "E-commerce",
      icon: "🛒",
      description:
        "Personalized recommendations, inventory management, and customer behavior analysis.",
    },
    {
      title: "Banking",
      icon: "🏛️",
      description:
        "Risk management, fraud detection, credit scoring, and automated financial advisory services with AI.",
    },
  ];

  const services = [
    {
      title: "Machine Learning",
      icon: "🧠",
      description:
        "Custom ML models that learn from your data to make intelligent predictions and automate decision-making processes.",
    },
    {
      title: "Natural Language Processing",
      icon: "💭",
      description:
        "Advanced NLP solutions for chatbots, sentiment analysis, and automated text processing.",
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      description:
        "Image and video analysis solutions for quality control, object detection, and visual recognition.",
    },
    {
      title: "Predictive Analytics",
      icon: "📈",
      description:
        "Data-driven insights and forecasting to help you make informed business decisions.",
    },
    {
      title: "Process Automation",
      icon: "⚙️",
      description:
        "Intelligent automation solutions that streamline workflows and reduce manual tasks.",
    },
    {
      title: "AI Security",
      icon: "🔒",
      description:
        "Advanced security solutions powered by AI to protect your business from emerging threats.",
    },
  ];

  const agenticCapabilities = [
    {
      title: "Autonomous Decision Making",
      icon: "🤝",
      description:
        "AI agents that can make independent decisions based on real-time data and predefined objectives.",
    },
    {
      title: "Multi-Agent Systems",
      icon: "👥",
      description:
        "Coordinated AI agents working together to solve complex problems and optimize business processes.",
    },
    {
      title: "Self-improving Systems",
      icon: "🔄",
      description:
        "AI agents that continuously learn and adapt their strategies based on performance feedback.",
    },
    {
      title: "Distributed Intelligence",
      icon: "🌐",
      description:
        "Scalable agent networks that can handle complex workflows across multiple systems and platforms.",
    },
    {
      title: "Human-AI Collaboration",
      icon: "🤖",
      description:
        "Seamless integration between human workers and AI agents for enhanced productivity.",
    },
    {
      title: "Real-time Response",
      icon: "⚡",
      description:
        "Intelligent agents that respond instantly to changing conditions and business requirements.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex flex-col md:flex-row items-center md:items-start px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12 md:py-16 lg:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transform Your Business with{" "}
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  AI-Powered Solutions
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Maheshwara.ai delivers cutting-edge artificial intelligence
                solutions including Agentic AI and Generative AI that drive
                innovation, optimize operations, and accelerate growth for
                modern businesses.
              </motion.p>

            </motion.div>

            <motion.div
              className="relative h-96 flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {floatingCards.map((card, idx) => {
                const positions = [
                  { top: "5%", left: "5%", delay: 0 },
                  { top: "10%", right: "10%", delay: 0.2 },
                  { top: "40%", left: "15%", delay: 0.4 },
                  { top: "50%", right: "5%", delay: 0.6 },
                  { bottom: "10%", left: "5%", delay: 0.8 },
                  { bottom: "5%", right: "20%", delay: 1 },
                ];
                const pos = positions[idx];
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: card.delay, duration: 0.6 }}
                    style={{
                      ...pos,
                      position: "absolute",
                    }}
                    className="animate-float"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -10 }}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 w-32 text-center transition-colors"
                    >
                      <div className="text-3xl mb-2">
                        {aiCapabilities[idx]?.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {aiCapabilities[idx]?.title}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <SectionRenderer
        title="Real-World Applications"
        items={realWorldApplications}
        variant="bordered"
      />

      <motion.section
        ref={appRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-slate-800 transition-colors"
      >
        <h2 className="section-title dark:text-white">
          Generative AI Solutions
        </h2>
        <p className="section-subtitle dark:text-gray-300">
          Create, innovate, and transform with AI that generates original
          content across all media types
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "Unleash Creative Potential",
              text: "Generative AI is revolutionizing how we create content, solve problems, and innovate. Our advanced generative AI solutions can create original text, images, code, music, and more, helping you accelerate creativity, reduce costs, and unlock new possibilities for your business.",
            },
            {
              title: "Transform Your Business",
              text: "Leverage the power of AI-driven content creation to streamline your workflows, enhance customer engagement, and drive innovation across all your business processes. Our solutions adapt to your unique requirements and scale with your growth.",
            },
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Generation Capabilities
        </h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {generationCapabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 text-center transition-colors"
            >
              <div className="text-4xl mb-3">{cap.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                {cap.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <SectionRenderer
        title="Industry Applications"
        items={industryApplications}
        variant="bordered"
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-slate-800 transition-colors"
      >
        <h2 className="section-title dark:text-white">Industry Solutions</h2>
        <p className="section-subtitle dark:text-gray-300">
          Tailored AI solutions for different industries
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industrySolutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 flex gap-4 transition-colors"
            >
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-2xl"
                >
                  {solution.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="section-container"
      >
        <h2 className="section-title dark:text-white">Our Services</h2>
        <p className="section-subtitle dark:text-gray-300">
          Comprehensive AI solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-slate-800 transition-colors"
      >
        <h2 className="section-title dark:text-white">Agentic AI Solutions</h2>
        <p className="section-subtitle dark:text-gray-300">
          Autonomous AI agents that think, act, and adapt independently to drive
          your business forward
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "What is Agentic AI?",
              text: "Agentic AI represents the next evolution of artificial intelligence - systems that can perceive their environment, make decisions, and take actions autonomously. Unlike traditional AI, Agentic AI systems can operate independently, learn from their experiences, and adapt to changing conditions.",
            },
            {
              title: "Autonomous Intelligence",
              text: "Our Agentic AI solutions are designed to work independently, making real-time decisions based on complex data analysis and environmental factors. These intelligent agents adapt, learn, and optimize their performance continuously, delivering unprecedented efficiency and innovation to your business operations.",
            },
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Key Capabilities
        </h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {agenticCapabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 text-center transition-colors"
            >
              <div className="text-4xl mb-3">{cap.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                {cap.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}

// Reusable section component
function SectionRenderer({
  title,
  items,
  variant = "card",
}: {
  title: string;
  items: Array<{ title: string; description: string }>;
  variant?: "card" | "bordered";
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`section-container ${variant === "bordered"
        ? "bg-white dark:bg-slate-900"
        : "bg-gray-50 dark:bg-slate-800"
        } transition-colors`}
    >
      <h2 className="section-title dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={
              variant === "bordered"
                ? "card-with-border dark:bg-slate-800"
                : "bg-white dark:bg-slate-900 rounded-lg p-6"
            }
          >
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
