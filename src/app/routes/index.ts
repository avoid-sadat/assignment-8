import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { categoryRoutes } from '../modules/Category/categoryBook.route';
import { bookRoutes } from '../modules/Book/book.route';
import { reviewRatingRoutes } from '../modules/ReviewRating/reviewRating.route';

const router = express.Router();

const moduleRoutes = [
  // ... other routes
  {
    path: "/users",
    route: userRoutes
  },
  {
    path:'/category',
    route:categoryRoutes
    
  },
  {
    path:"/books",
    route:bookRoutes
  },
  {
    path:"/review-rating",
    route:reviewRatingRoutes
  }

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
