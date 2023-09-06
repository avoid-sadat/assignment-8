import express from 'express';
import { BookController } from './book.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';



const router = express.Router();

router.post('/',auth(ENUM_USER_ROLE.ADMIN), BookController.insertIntoDB)
router.get('/', BookController.getAllFromDB)
router.get('/:id', BookController.singleBookDB)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.singleBookUpdate)
router.delete('/:id',BookController.deleteBook)
router.get('/:categoryId/category', BookController.getBookByCategory)


export const bookRoutes = router;