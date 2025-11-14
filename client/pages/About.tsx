import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="section-container">
        <h1 className="section-title">About Maheshwara.ai</h1>
        <p className="section-subtitle">
          Empowering businesses through intelligent automation, Agentic AI, and Generative AI solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Leading the AI Revolution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Maheshwara.ai, we specialize in creating intelligent solutions that transform how businesses operate. Our team of AI experts and data scientists work tirelessly to deliver cutting-edge technologies including Agentic AI and Generative AI that drive real results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe in the power of artificial intelligence to solve complex business challenges and accelerate growth. Our commitment to innovation and excellence ensures that our clients receive solutions that are not just advanced, but also practical and immediately impactful.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-gray-600 mt-2">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">24+</p>
                <p className="text-gray-600 mt-2">Support Available</p>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-lg p-8 text-white flex flex-col items-center justify-center min-h-96">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold">AI Technology</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
