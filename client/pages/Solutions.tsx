import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Solutions() {
  const solutions = [
    {
      title: "Manufacturing",
      icon: "🏭",
      description: "Quality control, predictive maintenance, and supply chain optimization powered by AI.",
      benefits: [
        "Reduce defects by up to 90%",
        "Predict equipment failures before they happen",
        "Optimize production scheduling",
      ],
    },
    {
      title: "Finance",
      icon: "🏦",
      description: "Fraud detection, risk assessment, and algorithmic trading solutions.",
      benefits: [
        "Real-time fraud detection",
        "Improved risk assessment accuracy",
        "Automated trading strategies",
      ],
    },
    {
      title: "Healthcare",
      icon: "❤️",
      description: "Medical imaging analysis, drug discovery, and patient care optimization.",
      benefits: [
        "Faster diagnosis with higher accuracy",
        "Accelerated drug discovery",
        "Improved patient outcomes",
      ],
    },
    {
      title: "Education",
      icon: "🎓",
      description: "Personalized learning, automated grading, and educational content generation.",
      benefits: [
        "Personalized learning paths",
        "Reduced grading time by 70%",
        "Enhanced student engagement",
      ],
    },
    {
      title: "E-commerce",
      icon: "🛒",
      description: "Personalized recommendations, inventory management, and customer behavior analysis.",
      benefits: [
        "Increase sales by 40%",
        "Optimize inventory levels",
        "Improve customer lifetime value",
      ],
    },
    {
      title: "Banking",
      icon: "🏛️",
      description: "Risk management, fraud detection, credit scoring, and automated financial advisory services with AI.",
      benefits: [
        "Reduce fraud losses significantly",
        "Improve credit scoring accuracy",
        "Automate compliance checks",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="section-container">
        <h1 className="section-title">Industry Solutions</h1>
        <p className="section-subtitle">
          Tailored AI solutions designed for specific industry challenges and opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{solution.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {solution.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container bg-blue-50">
        <h2 className="section-title">Ready to Transform Your Business?</h2>
        <p className="section-subtitle mb-8">
          Let's discuss how our AI solutions can help you achieve your business goals
        </p>
        <div className="text-center">
          <button className="btn-primary text-lg">Get Started Today</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
