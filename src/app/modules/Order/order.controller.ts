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

export const OrderController = {
  insertIntoDB
}