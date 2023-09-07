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
exports.OrderService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdOrder = yield prisma.$transaction((prismaClient) => __awaiter(void 0, void 0, void 0, function* () {
            // Create the order record
            const order = yield prismaClient.order.create({
                data: {
                    userId: data.userId,
                    status: data.status,
                    orderedBooks: data.orderedBooks
                },
            });
            // Create the orderedBooks records
            return order;
        }));
        return createdOrder;
    }
    catch (error) {
        // Handle any errors that may occur during database insertion
        throw new Error("Error inserting data into the database: ");
    }
});
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.findMany();
    return result;
});
const getOrderSpecificCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.order.findMany({
            where: {
                userId: customerId, // Filter orders by customer ID
            },
        });
        return result;
    }
    catch (error) {
        console.error("Error fetching customer orders: ");
        return null;
    }
});
const singleOrder = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.order.findUnique({
        where: {
            id: orderId
        }
    });
    if (!result) {
        throw new Error("Order not found");
    }
    return result;
});
exports.OrderService = {
    insertIntoDB,
    getAllOrder,
    getOrderSpecificCustomer,
    singleOrder
};
