"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/User/user.route");
const categoryBook_route_1 = require("../modules/Category/categoryBook.route");
const book_route_1 = require("../modules/Book/book.route");
const reviewRating_route_1 = require("../modules/ReviewRating/reviewRating.route");
const order_route_1 = require("../modules/Order/order.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... other routes
    {
        path: "/signup",
        route: user_route_1.userRoutes
    },
    {
        path: "/login/signin",
        route: user_route_1.userRoutes
    },
    {
        path: "/users",
        route: user_route_1.userRoutes
    },
    {
        path: '/categories',
        route: categoryBook_route_1.categoryRoutes
    },
    {
        path: "/books/create-book",
        route: book_route_1.bookRoutes
    },
    {
        path: "/books",
        route: book_route_1.bookRoutes
    },
    {
        path: "/review-rating",
        route: reviewRating_route_1.reviewRatingRoutes
    },
    {
        path: "/orders/create-order",
        route: order_route_1.orderRoutes
    },
    {
        path: "/orders",
        route: order_route_1.orderRoutes
    },
    {
        path: "/order",
        route: order_route_1.orderRoutes
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
