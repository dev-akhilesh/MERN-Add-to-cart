import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Delicious Meals Delivered to Your Doorstep</h1>
                    <p className="text-lg md:text-xl mb-6">Explore our wide variety of food options and order online with ease.</p>
                    <Link to="/products">
                        <button className="bg-yellow-500 text-blue-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
                            Explore Now
                        </button>
                    </Link>
                </div>
            </section>

            {/* Additional Cards Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Explore More Options</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Additional Cards */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
                            <img
                                src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                                alt="Order Online"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Order Online</h3>
                                <p className="text-gray-700 text-sm">Stay home and order to your doorstep</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
                            <img
                                src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                                alt="Dining"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Dining</h3>
                                <p className="text-gray-700 text-sm">View the city's favourite dining venues</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105">
                            <img
                                src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                                alt="Live Events"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">Live Events</h3>
                                <p className="text-gray-700 text-sm">Discover India’s best events & concerts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us and Taste the Best</h2>
                    <p className="text-lg mb-6">Sign up to receive exclusive offers and updates on our latest dishes.</p>
                    <Link to="/signup">
                        <button className="bg-yellow-500 text-blue-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
                            Sign Up Now
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
