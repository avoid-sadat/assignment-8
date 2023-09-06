import express from 'express';
import { UserController } from './user.controller';



const router = express.Router();
//router.post('/', UserController.loginUser)
router.post('/', UserController.insertIntoDB)
router.get('/', UserController.getAllUser)
router.get('/:id', UserController.getSingleUser)
router.patch('/:id', UserController.updateSingleUser)
router.delete('/:id', UserController.deleteSingleUser)





export const userRoutes = router;