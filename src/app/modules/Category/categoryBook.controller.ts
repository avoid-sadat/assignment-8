import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CategoryService } from "./categoryBook.service";

const insertIntoDB = catchAsync(async (req:Request,res:Response)=>{
  const result = await CategoryService.insertIntoDB(req.body)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Category Created Successfully",
    data:result
  })
})
const getAllCategory = catchAsync(async (req:Request,res:Response)=>{
  const result = await CategoryService.getAllCategory()
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Category fetched Successfully",
    data:result
  })
})
const getSingleCategory = catchAsync(async (req:Request,res:Response)=>{
  const {id} = req.params
  const result = await CategoryService.getSingleCategory(id)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Category fetched Successfully",
    data:result
  })
})
const updateCategory = catchAsync(async (req:Request,res:Response)=>{
  const {id} = req.params
  const updateData = req.body
  const result = await CategoryService.updateCategory(id,updateData)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Category update Successfully",
    data:result
  })
})
const deleteCategory = catchAsync(async (req:Request,res:Response)=>{
  const {id} = req.params
  const result = await CategoryService.deleteCategory(id)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Category deleted Successfully",
    data:result
  })
})

export const CategoryController ={
  insertIntoDB,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory
} 