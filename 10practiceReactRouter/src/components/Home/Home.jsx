import React from 'react';

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn. Build. <span className="text-blue-500">Ship Faster</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          A modern platform to learn development, build real-world projects,
          and grow as an engineer.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Project-Based Learning
            </h3>
            <p className="text-gray-400">
              Learn by building real projects instead of watching endless tutorials.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Industry-Ready Skills
            </h3>
            <p className="text-gray-400">
              Follow structured paths designed for modern tech careers.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Community Support
            </h3>
            <p className="text-gray-400">
              Learn together, share progress, and grow faster with peers.
            </p>
          </div>

        </div>
      </section>

      <section className="border-t border-gray-800 py-16 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to start your journey?
        </h2>
        <p className="text-gray-400 mt-4">
          Start building today and become job-ready faster.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition">
          Join Now
        </button>
      </section>

    </div>
  );
}

export default Home;
