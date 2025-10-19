import React from "react";
import { Link } from "react-router";
const First = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      <button className="absolute top-10 right-3 bg-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-indigo-800 transition duration-300">
        <Link to={"/AdminLogin"}> Admin Login</Link>
      </button>
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        {/* Main Card */}
        <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl max-w-lg text-center">
          {/* App Title */}
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md mb-4">
            🎓 Feedback App
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-8">
            Share your thoughts, improve the experience. A modern platform for
            collecting student feedback.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 justify-center">
            <Link
              to="/login"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-indigo-800 transition duration-300"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 text-sm opacity-80 z-10">
          Made with ❤️ using{" "}
          <span className="font-semibold">React + Tailwind</span>
        </footer>
      </div>
    </>
  );
};

export default First;
