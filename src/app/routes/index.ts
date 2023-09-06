import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { categoryRoutes } from '../modules/Category/categoryBook.route';
import { bookRoutes } from '../modules/Book/book.route';
import { reviewRatingRoutes } from '../modules/ReviewRating/reviewRating.route';

const router = express.Router();

const moduleRoutes = [
  // ... other routes
  {
    path: "/signup",
    route: userRoutes
  },
  {
    path: "/login/signin",
    route: userRoutes
  },
  {
    path: "/users",
    route: userRoutes
  },
  {
    path:'/categories',
    route:categoryRoutes
    
  },
  {
    path:"/books/create-book",
    route:bookRoutes
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
