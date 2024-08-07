import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-yellow-400 transition">Home</Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
                    <Link to="/cart" className="hover:text-yellow-400 transition">Cart</Link>
                </div>
                <button className="md:hidden text-xl" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center space-y-6`}>
                <button className="absolute top-4 right-4 text-white text-2xl" onClick={toggleMobileMenu}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <Link to="/products" className="text-white text-xl hover:text-yellow-400 transition" onClick={toggleMobileMenu}>Products</Link>
                <Link to="/cart" className="text-white text-xl hover:text-yellow-400 transition" onClick={toggleMobileMenu}>Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;

