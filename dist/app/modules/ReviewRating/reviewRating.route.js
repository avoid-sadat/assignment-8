"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRatingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const reviewRating_controller_1 = require("./reviewRating.controller");
const router = express_1.default.Router();
router.post('/', reviewRating_controller_1.ReviewAndRatingController.insertIntoDB);
exports.reviewRatingRoutes = router;
