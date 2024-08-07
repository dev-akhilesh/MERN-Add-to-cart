const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add item to cart
router.post('/', async (req, res) => {
    try {
        const { itemId, quantity } = req.body;

        // Check if item already exists in the cart
        let cartItem = await Cart.findOne({ itemId });
        if (cartItem) {
            // Update the quantity if the item already exists
            cartItem.quantity += quantity;
            cartItem = await cartItem.save();
        } else {
            // Create a new cart item if it does not exist
            cartItem = new Cart({ itemId, quantity });
            await cartItem.save();
        }

        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: 'Error adding item to cart' });
    }
});

// Get all cart items
router.get('/', async (req, res) => {
    try {
        const cartItems = await Cart.find().populate('itemId'); // Populate to get product details
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cart items' });
    }
});

// Update cart item quantity
router.put('/:itemId', async (req, res) => {
    try {
        const { itemId } = req.params;
        const { quantity } = req.body;

        const updatedCartItem = await Cart.findOneAndUpdate(
            { itemId },
            { $set: { quantity } },
            { new: true }
        );

        if (!updatedCartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        res.json(updatedCartItem);
    } catch (error) {
        res.status(500).json({ error: 'Error updating cart item' });
    }
});

// Delete item from cart
router.delete('/:itemId', async (req, res) => {
    try {
        const { itemId } = req.params;

        const deletedCartItem = await Cart.findOneAndDelete({ itemId });

        if (!deletedCartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting cart item' });
    }
});

// Clear cart
router.delete('/', async (req, res) => {
    try {
        await Cart.deleteMany({});
        res.json({ message: 'All items removed from cart' });
    } catch (error) {
        res.status(500).json({ error: 'Error clearing cart' });
    }
});

module.exports = router;
