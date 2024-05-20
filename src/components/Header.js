import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">E-commerce Site</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/men" className="hover:underline">Men</Link></li>
          <li><Link to="/women" className="hover:underline">Women</Link></li>
          <li><Link to="/kids" className="hover:underline">Kids</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
