import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Find Your Lost Items or Report Found Ones</h2>
        <p className="mb-8">Help others by reporting lost or found items in your community.</p>
        <Link to="/report">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-300 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
