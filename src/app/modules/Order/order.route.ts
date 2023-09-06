import express from 'express';
import { OrderController } from './order.controller';




const router = express.Router();

router.post('/', OrderController.insertIntoDB)
router.get('/:orderId', OrderController.singleOrder)
router.get('/', OrderController.getAllOrder)
router.get('/:customerId', OrderController.getOrderSpecificCustomer)






export const orderRoutes = router;