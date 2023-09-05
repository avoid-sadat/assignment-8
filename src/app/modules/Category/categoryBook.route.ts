import express from 'express';
import { CategoryController } from './categoryBook.controller';



const router = express.Router();

router.post('/', CategoryController.insertIntoDB)


export const categoryRoutes = router;