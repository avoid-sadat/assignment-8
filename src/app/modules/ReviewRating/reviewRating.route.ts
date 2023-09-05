import express from 'express';
import { ReviewAndRatingController } from './reviewRating.controller';



const router = express.Router();

router.post('/', ReviewAndRatingController.insertIntoDB)


export const reviewRatingRoutes = router;