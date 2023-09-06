import express from 'express';
import { OrderController } from './order.controller';




const router = express.Router();

router.post('/', OrderController.insertIntoDB)



export const orderRoutes = router;