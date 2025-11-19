import React from 'react';

export const Technology = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Technology</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        We leverage cutting-edge technology to deliver the best solutions.
      </p>
      <div className="mt-10 flex justify-center gap-8">
        <span className="text-2xl text-gray-700 dark:text-gray-300">Tech 1</span>
        <span className="text-2xl text-gray-700 dark:text-gray-300">Tech 2</span>
        <span className="text-2xl text-gray-700 dark:text-gray-300">Tech 3</span>
      </div>
    </section>
  );
};
