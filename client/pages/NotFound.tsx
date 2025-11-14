import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-2xl font-bold text-gray-900 mb-3">Page not found</p>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
