import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Lost & Found. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
