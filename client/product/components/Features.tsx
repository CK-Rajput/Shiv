import React from 'react';

export const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Features</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg shadow-md dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Feature One</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Description for feature one.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Feature Two</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Description for feature two.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Feature Three</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Description for feature three.</p>
        </div>
      </div>
    </section>
  );
};
