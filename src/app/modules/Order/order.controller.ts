import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import { OrderService } from "./order.service"
import sendResponse from "../../../shared/sendResponse"
import { Request, Response } from "express"


const insertIntoDB = catchAsync(async (req:Request,res:Response)=>{
  const result = await OrderService.insertIntoDB(req.body)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Order Created Successfully",
    data:result
  })
})

const getAllOrder = catchAsync(async (req:Request,res:Response)=>{
  const result = await OrderService.getAllOrder()
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Order Fetched Successfully",
    data:result
  })
})

const getOrderSpecificCustomer = catchAsync(async (req:Request,res:Response)=>{
  const {customerId} = req.params
  const result = await OrderService.getOrderSpecificCustomer(customerId)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Order Fetched Successfully",
    data:result
  })
})

const singleOrder = catchAsync(async (req:Request,res:Response)=>{
  const {orderId} = req.params
  const result = await OrderService.singleOrder(orderId)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Order Fetched Successfully",
    data:result
  })
})



export const OrderController = {
  insertIntoDB,
  getAllOrder,
  getOrderSpecificCustomer,
  singleOrder
}