import React from 'react';

export const Industries = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Industries We Serve</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg shadow-md dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Industry One</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Details about industry one.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Industry Two</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Details about industry two.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Industry Three</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Details about industry three.</p>
        </div>
      </div>
    </section>
  );
};
