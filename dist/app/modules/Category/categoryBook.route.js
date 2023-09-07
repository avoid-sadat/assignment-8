"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const categoryBook_controller_1 = require("./categoryBook.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), categoryBook_controller_1.CategoryController.insertIntoDB);
router.get('/', categoryBook_controller_1.CategoryController.getAllCategory);
router.get('/:id', categoryBook_controller_1.CategoryController.getSingleCategory);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), categoryBook_controller_1.CategoryController.updateCategory);
router.delete('/:id', categoryBook_controller_1.CategoryController.deleteCategory);
exports.categoryRoutes = router;
