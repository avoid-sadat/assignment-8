import express from 'express';
import { CategoryController } from './categoryBook.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';



const router = express.Router();

router.post('/',auth(ENUM_USER_ROLE.ADMIN), CategoryController.insertIntoDB)
router.get('/', CategoryController.getAllCategory)
router.get('/:id', CategoryController.getSingleCategory)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN),CategoryController.updateCategory)
router.delete('/:id',CategoryController.deleteCategory)


export const categoryRoutes = router;