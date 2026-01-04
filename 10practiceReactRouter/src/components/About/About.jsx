import React from "react";

function About() {
  return (
    <main className="bg-black text-white min-h-screen px-6">

      {/* Page Title */}
      <section className="max-w-6xl mx-auto pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-500">Us</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          We are building a developer-focused platform that emphasizes
          practical learning and real-world skills.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our <span className="text-blue-500">Mission</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our goal is to help learners grow by building projects,
            understanding fundamentals deeply, and developing confidence
            to ship production-ready applications.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            “Real learning happens when theory meets practice.”
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Learn by Doing
            </h3>
            <p className="text-gray-400">
              Building projects is the fastest way to gain real understanding.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Consistency
            </h3>
            <p className="text-gray-400">
              Daily effort compounds into long-term success.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Community
            </h3>
            <p className="text-gray-400">
              Growth accelerates when learning is shared.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Text */}
      <section className="max-w-6xl mx-auto pb-20 text-center">
        <p className="text-gray-400 text-lg">
          We believe education should be practical, accessible,
          and designed for the future.
        </p>
      </section>

    </main>
  );
}

export default About;
