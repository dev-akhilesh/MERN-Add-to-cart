import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://mern-add-to-cart.onrender.com/api/products');
                setProducts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (product) => {
        try {
            await axios.post('https://mern-add-to-cart.onrender.com/api/cart', {
                itemId: product._id,
                quantity: 1
            });
            alert('Item added to cart!');
        } catch (err) {
            alert('Error adding item to cart: ' + err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching products: {error.message}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map(product => (
                <div key={product._id} className="border p-4 rounded-lg shadow-lg">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
