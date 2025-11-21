import React from 'react';
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Industries } from "./components/Industries";
import { UseCases } from "./components/UseCases";
import { Technology } from "./components/Technology";
import { CTA } from "./components/CTA";
import { FloatingMockups } from "./components/FloatingMockups";
import { Product3DModel } from "./components/Product3DModel";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Layer 1: Background Color */}
      <div className="fixed inset-0 bg-[#0f0a1e] z-[-1]" />

      {/* Layer 2: 3D Model (z-index 0) */}
      <Product3DModel />

      {/* Layer 3: Content (z-index 10) */}
      <React.Suspense fallback={<div className="fixed inset-0 bg-[#0f0a1e] z-50 flex items-center justify-center text-white">Loading...</div>}>
        <div className="relative z-10">
          <FloatingMockups />
          {/* <Hero /> */}
          <Features />
          <Industries />
          <UseCases />
          <Technology />
          <CTA />
        </div>
      </React.Suspense>
    </div>
  );
}
