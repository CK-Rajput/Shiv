import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-gray-300 dark:text-gray-400 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-cyan-400 mb-4">
              M
            </div>
            <p className="text-sm leading-relaxed">
              Maheshwara.ai builds AI systems that automate complex workflows, generate high-value content, and scale machine learning across enterprise operations.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.33V9.25h2.96V7.02c0-2.92 1.78-4.51 4.39-4.51 1.25 0 2.33.09 2.63.13v3.05h-1.81c-1.42 0-1.69.67-1.69 1.66V9.25h3.37l-.44 3.54h-2.93V20h-3.04z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.824 8.207 11.188.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Machine Learning Solutions</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Agentic AI Systems</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Generative AI Innovations</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Computer Intelligence</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Natural Language Understanding</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Advanced Data Analytics</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Finance</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Education</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Banking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:contact@maheshwara.ai" className="text-sm hover:text-primary transition-colors">Email: contact@maheshwara.ai</a></li>
              <li><a href="tel:+1-555-0100" className="text-sm hover:text-primary transition-colors">Phone: +1-555-0100</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors">Contact Form</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>© 2025 Maheshwara.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
