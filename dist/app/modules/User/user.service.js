"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
// import { ILoginUser} from "./user.constant";
// import ApiError from "../../../errors/ApiError";
// import httpStatus from "http-status";
const prisma = new client_1.PrismaClient();
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.create({
        data
    });
    return result;
});
// const loginUser = async (payload: ILoginUser): Promise<ILoginUser> => {
//   const { email, password } = payload;
//   // Find users with the same email
//   const usersWithSameEmail = await prisma.user.findMany({ where: { email } });
//   if (usersWithSameEmail.length === 0) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
//   }
//   // Loop through the found users and check if the provided password matches any user's password
//   let authenticatedUser = null;
//   for (const user of usersWithSameEmail) {
//     if (user.password === password) {
//       authenticatedUser = user;
//       break; // Exit the loop as soon as a matching user is found
//     }
//   }
//   if (!authenticatedUser) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
//   }
//   return authenticatedUser; // Return the authenticated user
// }
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany();
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateSingleUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.delete({
        where: {
            id
        }
    });
    return result;
});
exports.UserService = {
    insertIntoDB,
    // loginUser,
    getAllUser,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser
};
