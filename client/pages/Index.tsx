import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Index() {
  const [floatingCards, setFloatingCards] = useState<{ id: number; delay: number }[]>([]);

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

  const generationCapabilities = [
    { title: "Content Generation", icon: "✍️", description: "Create high-quality text, images, videos, and multimedia content automatically using advanced AI models." },
    { title: "Code Generation", icon: "💻", description: "Automatically generate, optimize, and debug code across multiple programming languages and frameworks." },
    { title: "Image & Video Creation", icon: "🎥", description: "Generate stunning visuals, animations, and video content tailored to your brand and requirements." },
    { title: "Creative Media", icon: "🎵", description: "Produce original music, sound effects, and audio content for various platforms." },
    { title: "Document Generation", icon: "📄", description: "Automatically create reports, proposals, documentation, and other business documents." },
    { title: "Personalized Content", icon: "👤", description: "Generate customized content that adapts to user preferences, behavior, and specific requirements." },
  ];

  const realWorldApplications = [
    {
      title: "Customer Service Automation",
      description: "AI agents handling customer inquiries, routing requests, and resolving issues autonomously.",
    },
    {
      title: "Financial Trading",
      description: "Intelligent trading systems making split-second decisions based on market conditions and risk parameters.",
    },
    {
      title: "Resource Management",
      description: "Autonomous systems optimizing resource allocation, energy consumption, and operational efficiency.",
    },
    {
      title: "Personalized Marketing & Sales",
      description: "AI-driven platforms analyzing customer data to deliver hyper-personalized marketing campaigns, optimize sales funnels, and enhance customer engagement.",
    },
    {
      title: "Healthcare & Medical Diagnosis",
      description: "AI agents analyzing medical issues, patient data, and symptoms to assist doctors in diagnosis, treatment planning, and drug discovery.",
    },
    {
      title: "Smart Manufacturing & Quality Control",
      description: "Autonomous systems monitoring production lines, detecting defects in real-time, and optimizing manufacturing processes for maximum efficiency.",
    },
  ];

  const industryApplications = [
    {
      title: "Marketing & Advertising",
      description: "Create compelling ad copy, social media content, and marketing materials that resonate with your target audience.",
    },
    {
      title: "Product Development",
      description: "Generate product descriptions, user manuals, and technical documentation to accelerate development cycles.",
    },
    {
      title: "Education & Training",
      description: "Develop interactive learning materials, quizzes, and educational content personalized for different learning styles.",
    },
    {
      title: "Creative Industries",
      description: "Produce original artwork, music, stories, and creative content for entertainment and artistic applications.",
    },
    {
      title: "Legal & Compliance",
      description: "Generate legal documents, contracts, compliance reports, and automated legal research to streamline law firm operations.",
    },
    {
      title: "E-commerce & Retail",
      description: "Create product catalogs, customer reviews, personalized recommendations, and dynamic pricing strategies using AI-generated content.",
    },
  ];

  const industrySolutions = [
    {
      title: "Manufacturing",
      icon: "🏭",
      description: "Quality control, predictive maintenance, and supply chain optimization powered by AI.",
    },
    {
      title: "Finance",
      icon: "🏦",
      description: "Fraud detection, risk assessment, and algorithmic trading solutions.",
    },
    {
      title: "Healthcare",
      icon: "❤️",
      description: "Medical imaging analysis, drug discovery, and patient care optimization.",
    },
    {
      title: "Education",
      icon: "🎓",
      description: "Personalized learning, automated grading, and educational content generation.",
    },
    {
      title: "E-commerce",
      icon: "🛒",
      description: "Personalized recommendations, inventory management, and customer behavior analysis.",
    },
    {
      title: "Banking",
      icon: "🏛️",
      description: "Risk management, fraud detection, credit scoring, and automated financial advisory services with AI.",
    },
  ];

  const services = [
    {
      title: "Machine Learning",
      icon: "🧠",
      description: "Custom ML models that learn from your data to make intelligent predictions and automate decision-making processes.",
    },
    {
      title: "Natural Language Processing",
      icon: "💭",
      description: "Advanced NLP solutions for chatbots, sentiment analysis, and automated text processing.",
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "Image and video analysis solutions for quality control, object detection, and visual recognition.",
    },
    {
      title: "Predictive Analytics",
      icon: "📈",
      description: "Data-driven insights and forecasting to help you make informed business decisions.",
    },
    {
      title: "Process Automation",
      icon: "⚙️",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks.",
    },
    {
      title: "AI Security",
      icon: "🔒",
      description: "Advanced security solutions powered by AI to protect your business from emerging threats.",
    },
  ];

  const agenticCapabilities = [
    {
      title: "Autonomous Decision Making",
      icon: "🤝",
      description: "AI agents that can make independent decisions based on real-time data and predefined objectives.",
    },
    {
      title: "Multi-Agent Systems",
      icon: "👥",
      description: "Coordinated AI agents working together to solve complex problems and optimize business processes.",
    },
    {
      title: "Self-improving Systems",
      icon: "🔄",
      description: "AI agents that continuously learn and adapt their strategies based on performance feedback.",
    },
    {
      title: "Distributed Intelligence",
      icon: "🌐",
      description: "Scalable agent networks that can handle complex workflows across multiple systems and platforms.",
    },
    {
      title: "Human-AI Collaboration",
      icon: "🤖",
      description: "Seamless integration between human workers and AI agents for enhanced productivity.",
    },
    {
      title: "Real-time Response",
      icon: "⚡",
      description: "Intelligent agents that respond instantly to changing conditions and business requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business with{" "}
                <span className="text-primary">AI-Powered Solutions</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Maheshwara.ai delivers cutting-edge artificial intelligence solutions including Agentic AI and Generative AI that drive innovation, optimize operations, and accelerate growth for modern businesses.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn-primary">Get Started</button>
                <button className="btn-outline">Learn More</button>
              </div>
            </div>
            <div className="relative h-96 flex items-center justify-center">
              {floatingCards.map((card, idx) => {
                const positions = [
                  { top: "10%", left: "20%", delay: 0 },
                  { top: "30%", right: "15%", delay: 0.2 },
                  { top: "20%", right: "5%", delay: 0.4 },
                  { bottom: "30%", left: "10%", delay: 0.6 },
                  { bottom: "20%", right: "25%", delay: 0.8 },
                  { bottom: "10%", right: "5%", delay: 1 },
                ];
                const pos = positions[idx];
                return (
                  <div
                    key={card.id}
                    style={{
                      ...pos,
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${card.delay}s`,
                    }}
                    className="absolute bg-white rounded-lg shadow-lg p-4 w-32 text-center"
                  >
                    <div className="text-3xl mb-2">{aiCapabilities[idx]?.icon}</div>
                    <p className="text-sm font-medium text-gray-800">
                      {aiCapabilities[idx]?.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications Section */}
      <section className="section-container">
        <h2 className="section-title">Real-World Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realWorldApplications.map((app, idx) => (
            <div key={idx} className="card-with-border">
              <h3 className="font-bold text-lg mb-2 text-gray-900">{app.title}</h3>
              <p className="text-gray-600 text-sm">{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Generative AI Solutions Section */}
      <section className="section-container bg-gray-50">
        <h2 className="section-title">Generative AI Solutions</h2>
        <p className="section-subtitle">
          Create, innovate, and transform with AI that generates original content across all media types
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Unleash Creative Potential</h3>
            <p className="text-gray-600 leading-relaxed">
              Generative AI is revolutionizing how we create content, solve problems, and innovate. Our advanced generative AI solutions can create original text, images, code, music, and more, helping you accelerate creativity, reduce costs, and unlock new possibilities for your business.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Transform Your Business</h3>
            <p className="text-gray-600 leading-relaxed">
              Leverage the power of AI-driven content creation to streamline your workflows, enhance customer engagement, and drive innovation across all your business processes. Our solutions adapt to your unique requirements and scale with your growth.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Generation Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generationCapabilities.map((cap, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">{cap.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{cap.title}</h4>
              <p className="text-gray-600 text-sm">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="section-container">
        <h2 className="section-title">Industry Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryApplications.map((app, idx) => (
            <div key={idx} className="card-with-border">
              <h3 className="font-bold text-lg mb-2 text-gray-900">{app.title}</h3>
              <p className="text-gray-600 text-sm">{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="section-container bg-gray-50">
        <h2 className="section-title">Industry Solutions</h2>
        <p className="section-subtitle">Tailored AI solutions for different industries</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industrySolutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary">
                  <span className="text-2xl">{solution.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive AI solutions tailored to your business needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agentic AI Solutions Section */}
      <section className="section-container bg-blue-50">
        <h2 className="section-title">Agentic AI Solutions</h2>
        <p className="section-subtitle">Autonomous AI agents that think, act, and adapt independently to drive your business forward</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What is Agentic AI?</h3>
            <p className="text-gray-600 leading-relaxed">
              Agentic AI represents the next evolution of artificial intelligence - systems that can perceive their environment, make decisions, and take actions autonomously. Unlike traditional AI, Agentic AI systems can operate independently, learn from their experiences, and adapt to changing conditions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Autonomous Intelligence</h3>
            <p className="text-gray-600 leading-relaxed">
              Our Agentic AI solutions are designed to work independently, making real-time decisions based on complex data analysis and environmental factors. These intelligent agents adapt, learn, and optimize their performance continuously, delivering unprecedented efficiency and innovation to your business operations.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agenticCapabilities.map((cap, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">{cap.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{cap.title}</h4>
              <p className="text-gray-600 text-sm">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
