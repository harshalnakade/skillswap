import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl text-center p-8 bg-white shadow-2xl rounded-3xl">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to <span className="text-blue-600">SkillSwap</span>!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover a vibrant community where people exchange skills, share knowledge, and grow together. 
          Whether you're a learner or an expert – there's a place for you.
        </p>

        <div className="space-x-4 mb-6">
          <Link 
            to="/login" 
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Sign Up
          </Link>
        </div>

        <hr className="my-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">🌱 Learn Skills</h2>
            <p className="text-gray-600">
              Explore a wide range of topics and connect with people who can teach you new things.
            </p>
          </div>
          <div className="bg-indigo-100 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🤝 Share Expertise</h2>
            <p className="text-gray-600">
              Teach others your expertise and build a network of learners and professionals.
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">🌍 Build Community</h2>
            <p className="text-gray-600">
              Engage in meaningful exchanges and grow your presence in the SkillSwap community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
