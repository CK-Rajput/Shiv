import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductApp from '../product/App';
import '../product/styles/globals.css';

export default function Recognition() {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure page state persists on refresh
    if (typeof window !== 'undefined') {
      // Mark that we've loaded
      sessionStorage.setItem('product-page-loaded', 'true');
    }
  }, []);

  return (
    <div className="product-theme">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-all border border-white/10 hover:scale-110"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <ProductApp />
    </div>
  );
}
