import express from 'express';
import { createOrder, getAllOrders, updateOrderStatus } from '../controllers/order.controller';
import { adminAuth } from '../middleware/adminAuth';

const router = express.Router();

// Public route for creating orders
router.post('/', createOrder);

// Protected routes for admin
router.get('/', adminAuth, getAllOrders);
router.put('/:id', adminAuth, updateOrderStatus);

export default router;

