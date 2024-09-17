import React from "react";

const Navbar = () => {
  return (
    <nav className="text-white bg-primary text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
          <a href="#" className="text-accent hover:text-secondary">JEPCO</a>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-accent hover:text-secondary">Home</a>
            <a href="#" className="text-accent hover:text-secondary">Services</a>
            <a href="#" className="text-accent hover:text-secondary">About Us</a>
            <a href="#" className="text-accent hover:text-secondary">Careers</a>
            <a href="#" className="text-accent hover:text-secondary">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-accent focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
