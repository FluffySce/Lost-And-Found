import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Lost & Found
        </Link>
        <div className="flex space-x-6">
          <Link to="/recent-items" className="text-gray-700 hover:text-blue-500">Recent Items</Link>
          <Link to="/search" className="text-gray-700 hover:text-blue-500">Search</Link>
          <Link to="/map" className="text-gray-700 hover:text-blue-500">Map</Link>
          <Link to="/report" className="text-gray-700 hover:text-blue-500">Report</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
