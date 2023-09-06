import express from 'express';
import { BookController } from './book.controller';



const router = express.Router();

router.post('/', BookController.insertIntoDB)
router.get('/', BookController.getAllFromDB)
router.get('/:id', BookController.singleBookDB)
router.get('/:categoryId/category', BookController.getBookByCategory)


export const bookRoutes = router;