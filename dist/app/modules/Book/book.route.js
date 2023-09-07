"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.insertIntoDB);
router.get('/', book_controller_1.BookController.getAllFromDB);
router.get('/:id', book_controller_1.BookController.singleBookDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.singleBookUpdate);
router.delete('/:id', book_controller_1.BookController.deleteBook);
router.get('/:categoryId/category', book_controller_1.BookController.getBookByCategory);
exports.bookRoutes = router;
