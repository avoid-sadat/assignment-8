import express from 'express';
import { CategoryController } from './categoryBook.controller';



const router = express.Router();

router.post('/', CategoryController.insertIntoDB)
router.get('/', CategoryController.getAllCategory)
router.get('/:id', CategoryController.getSingleCategory)
router.patch('/:id', CategoryController.updateCategory)
router.delete('/:id', CategoryController.deleteCategory)


export const categoryRoutes = router;