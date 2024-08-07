// ProductCard.js
import React from 'react';

const ProductCard = ({ product, onQuantityChange, onRemove, quantity }) => {
    return (
        <li className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4 md:mb-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover mr-4 rounded"
                />
                <div>
                    <h2 className="text-lg font-semibold md:text-xl">{product.name}</h2>
                    <p className="text-sm md:text-base">{product.description}</p>
                    <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                <button
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    onClick={() => onQuantityChange(product._id, -1)}
                >
                    -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    onClick={() => onQuantityChange(product._id, 1)}
                >
                    +
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    onClick={() => onRemove(product._id)}
                >
                    Remove
                </button>
            </div>
        </li>
    );
};

export default ProductCard;
