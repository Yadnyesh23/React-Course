import React from 'react';

function Contact() {
  return (
    <main className="bg-black text-white min-h-screen px-6">

      {/* Page Heading */}
      <section className="max-w-6xl mx-auto pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Have a question, feedback, or want to collaborate?  
          Fill out the form and we’ll get back to you.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto pb-20">
        <form className="bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Send Message
          </button>

        </form>
      </section>

    </main>
  );
}

export default Contact;
