/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Order, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: Order): Promise<Order> => {
  try {
    const createdOrder = await prisma.$transaction(async (prismaClient) => {
      // Create the order record
      const order = await prismaClient.order.create({
        data: {
          userId: data.userId,
          status: data.status,
          orderedBooks: data.orderedBooks as any[]
        },
      });

      // Create the orderedBooks records

      return order;
    });

    return createdOrder;
  } catch (error) {
    // Handle any errors that may occur during database insertion
    throw new Error("Error inserting data into the database: ");
  }
};

const getAllOrder = async() =>{
  const result = await prisma.order.findMany()
  return result
}

const getOrderSpecificCustomer = async (customerId: string): Promise<Order[] | null> => {
  try {
    const result = await prisma.order.findMany({
      where: {
        userId: customerId, // Filter orders by customer ID
      },
    });


    return result;
  } catch (error) {
    console.error("Error fetching customer orders: ");
    return null;
  }
};

const singleOrder = async (orderId: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id: orderId
    }
  });

  if (!result) {
    throw new Error("Order not found");
  }

  return result;
}


export const OrderService = {
  insertIntoDB,
  getAllOrder,
  getOrderSpecificCustomer,
  singleOrder
};
