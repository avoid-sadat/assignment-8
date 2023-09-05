import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./book.service";

const insertIntoDB = catchAsync(async (req:Request,res:Response)=>{
  const result = await BookService.insertIntoDB(req.body)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Book Created Successfully",
    data:result
  })
})

export const BookController ={
  insertIntoDB
} 