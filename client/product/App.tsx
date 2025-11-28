import React, { useEffect, lazy, Suspense } from 'react';
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Industries } from "./components/Industries";
import { UseCases } from "./components/UseCases";
import { Technology } from "./components/Technology";
import { CTA } from "./components/CTA";
import { FloatingMockups } from "./components/FloatingMockups";

// Lazy load 3D model to prevent blocking initial render
const Product3DModel = lazy(() => import("./components/Product3DModel").then(module => ({ default: module.Product3DModel })));

// Component Error Boundary
class ComponentErrorBoundary extends React.Component<
  { children: React.ReactNode; componentName: string },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; componentName: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in ${this.props.componentName}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-900/20 border border-red-500/50 rounded-lg m-4">
          <p className="text-red-400 text-sm">
            Error loading {this.props.componentName}: {this.state.error?.message}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main Error Boundary
class ErrorBoundaryClass extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Product page error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-[#0f0a1e] z-[9999] flex items-center justify-center text-white p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  useEffect(() => {
    // Ensure content is visible immediately
    if (typeof window !== 'undefined') {
      // Use microtask to ensure DOM is ready
      Promise.resolve().then(() => {
        const contentLayer = document.querySelector('[data-content-layer]');
        if (contentLayer) {
          (contentLayer as HTMLElement).style.opacity = '1';
          (contentLayer as HTMLElement).style.visibility = 'visible';
        }
      });
    }
  }, []);

  return (
    <ErrorBoundaryClass>
      <div className="min-h-screen relative w-full overflow-x-hidden">
        {/* Layer 1: Background Color - Render immediately */}
        <div className="fixed inset-0 bg-[#0f0a1e] z-0" />

        {/* Layer 3: Content (z-index 10) - Render FIRST, before 3D model */}
        <div 
          data-content-layer
          className="relative z-[10] min-h-screen w-full" 
          style={{ 
            position: 'relative',
            isolation: 'isolate',
            pointerEvents: 'auto',
            opacity: 1,
            visibility: 'visible'
          }}
        >
          {/* Render content immediately - no waiting */}
          <ComponentErrorBoundary componentName="FloatingMockups">
            <FloatingMockups />
          </ComponentErrorBoundary>
          
          <ComponentErrorBoundary componentName="Features">
            <Features />
          </ComponentErrorBoundary>
          
          <ComponentErrorBoundary componentName="Industries">
            <Industries />
          </ComponentErrorBoundary>
          
          <ComponentErrorBoundary componentName="UseCases">
            <UseCases />
          </ComponentErrorBoundary>
          
          <ComponentErrorBoundary componentName="Technology">
            <Technology />
          </ComponentErrorBoundary>
          
          <ComponentErrorBoundary componentName="CTA">
            <CTA />
          </ComponentErrorBoundary>
        </div>

        {/* Layer 2: 3D Model (z-index 1) - Load AFTER content is visible */}
        <ComponentErrorBoundary componentName="Product3DModel">
          <Suspense fallback={null}>
            <Product3DModel />
          </Suspense>
        </ComponentErrorBoundary>
      </div>
    </ErrorBoundaryClass>
  );
}
