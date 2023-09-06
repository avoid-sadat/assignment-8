import express from 'express';
import { CategoryController } from './categoryBook.controller';



const router = express.Router();

router.post('/', CategoryController.insertIntoDB)
router.get('/', CategoryController.getAllCategory)
router.get('/:id', CategoryController.getSingleCategory)


export const categoryRoutes = router;