import express from 'express';
import { OrderController } from './order.controller';




const router = express.Router();

router.post('/', OrderController.insertIntoDB)
router.get('/', OrderController.getAllOrder)
router.get('/:id', OrderController.getOrderSpecificCustomer)



export const orderRoutes = router;