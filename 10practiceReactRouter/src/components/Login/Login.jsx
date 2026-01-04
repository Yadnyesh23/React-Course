import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <main className="bg-black text-white min-h-screen px-6">

      {/* Page Heading */}
      <section className="max-w-6xl mx-auto pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-blue-500">Login</span> to Your Account
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
          Welcome back! Please enter your credentials to continue.
        </p>
      </section>

      {/* Login Form */}
      <section className="max-w-md mx-auto pb-20">
        <form className="bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6">

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

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Login
          </button>

          {/* Extra */}
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Sign up
            </span>
          </p>

        </form>
      </section>
        <section>
            <NavLink to='/' className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition p-4">Back to Home</NavLink>
        </section>
    </main>
  );
}

export default Login;
