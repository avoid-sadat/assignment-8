import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ReviewAndRatingService } from "./reviewRating.service";

const insertIntoDB = catchAsync(async (req:Request,res:Response)=>{
  const result = await ReviewAndRatingService.insertIntoDB(req.body)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Thanks for review",
    data:result
  })
})

export const ReviewAndRatingController ={
  insertIntoDB
} 