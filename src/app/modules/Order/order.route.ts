import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';




const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.insertIntoDB)
router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrder)
router.get('/:orderId', auth(ENUM_USER_ROLE.ADMIN), OrderController.singleOrder)

router.get('/:customerId', OrderController.getOrderSpecificCustomer)






export const orderRoutes = router;