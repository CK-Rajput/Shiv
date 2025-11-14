import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-white">
      <Header />

      <section className="section-container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Comprehensive AI solutions tailored to your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <p className="text-gray-600 text-sm text-muted-foreground">{service.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container bg-blue-50">
        <h2 className="section-title">Why Choose Our Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Fast Implementation</h3>
            <p className="text-gray-600">Quick deployment of AI solutions with minimal disruption to your operations.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Measurable Results</h3>
            <p className="text-gray-600">Transparent metrics and KPIs to track the impact of our AI solutions.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Expert Support</h3>
            <p className="text-gray-600">Dedicated support team available 24/7 to ensure your success.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
