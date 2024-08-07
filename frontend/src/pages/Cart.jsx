import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartResponse = await axios.get('https://mern-add-to-cart.onrender.com/api/cart');
                const cartData = cartResponse.data;
                const productIds = cartData.map(item => item.itemId._id);

                if (productIds.length > 0) {
                    const productsResponse = await axios.get('https://mern-add-to-cart.onrender.com/api/products', { params: { ids: productIds } });
                    const productsData = productsResponse.data;
                    const productsMap = productsData.reduce((map, product) => {
                        map[product._id] = product;
                        return map;
                    }, {});

                    setProducts(productsMap);
                }

                setCartItems(cartData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart items:', error);
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = async (productId, change) => {
        try {
            const cartItem = cartItems.find(item => item.itemId._id === productId);
            if (!cartItem) return;

            const newQuantity = Math.max(cartItem.quantity + change, 1);
            await axios.put(`https://mern-add-to-cart.onrender.com/api/cart/${productId}`, { quantity: newQuantity });

            const updatedCartItems = cartItems.map(item =>
                item.itemId._id === productId ? { ...item, quantity: newQuantity } : item
            );
            setCartItems(updatedCartItems);
            setTotalPrice(calculateTotalPrice(updatedCartItems, products));
        } catch (error) {
            console.error('Error updating cart item:', error);
        }
    };

    const handleRemoveItem = async (productId) => {
        try {
            await axios.delete(`https://mern-add-to-cart.onrender.com/api/cart/${productId}`);
            const updatedCartItems = cartItems.filter(item => item.itemId._id !== productId);
            setCartItems(updatedCartItems);
            setTotalPrice(calculateTotalPrice(updatedCartItems, products));
        } catch (error) {
            console.error('Error removing cart item:', error);
        }
    };

    const handleClearCart = async () => {
        try {
            await axios.delete('https://mern-add-to-cart.onrender.com/api/cart');
            setCartItems([]);
            setTotalPrice(0);
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    const calculateTotalPrice = (cartItems, products) => {
        return cartItems.reduce((sum, cartItem) => {
            const product = products[cartItem.itemId._id];
            return sum + (product ? product.price * cartItem.quantity : 0);
        }, 0);
    };

    const totalPriceMemoized = useMemo(() => calculateTotalPrice(cartItems, products), [cartItems, products]);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <h1 className="text-center text-gray-500 text-5xl font-extrabold mt-8">
                        Your cart is empty
                    </h1>
                </div>


            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map(cartItem => {
                            const product = products[cartItem.itemId._id];
                            if (!product) return null; // Product not found

                            return (
                                <ProductCard
                                    key={cartItem.itemId._id}
                                    product={product}
                                    quantity={cartItem.quantity}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={handleRemoveItem}
                                />
                            );
                        })}
                    </ul>
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-4 md:mb-0"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                        <div className="text-lg font-bold">Total: ${totalPriceMemoized.toFixed(2)}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
