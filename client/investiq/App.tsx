import React, { useEffect, lazy, Suspense } from 'react';
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Industries } from "./components/Industries";
import { UseCases } from "./components/UseCases";
import { Technology } from "./components/Technology";
import { CTA } from "./components/CTA";

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

export default function App() {
    return (
        <div className="min-h-screen relative w-full overflow-x-hidden bg-[#0f0a1e]">
            <div className="relative z-[10] min-h-screen w-full">
                <ComponentErrorBoundary componentName="Hero">
                    <Hero />
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
        </div>
    );
}
