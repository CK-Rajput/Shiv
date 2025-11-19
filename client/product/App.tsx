import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Industries } from "./components/Industries";
import { UseCases } from "./components/UseCases";
import { Technology } from "./components/Technology";
import { CTA } from "./components/CTA";
import { FloatingMockups } from "./components/FloatingMockups";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <FloatingMockups />
      <Hero />
      <Features />
      <Industries />
      <UseCases />
      <Technology />
      <CTA />
      {/* <h1>Product Page Content (Placeholder) */}
      {/* <p>This content is from client/product/App.tsx</p> */}
    </div>
  );
}
