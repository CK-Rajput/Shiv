import React from 'react';

export const CTA = () => {
  return (
    <section className="py-20 bg-primary dark:bg-primary text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
      <p className="mt-4 text-lg">Contact us today for a free consultation!</p>
      <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition duration-300">Get Free Consultation</button>
    </section>
  );
};
