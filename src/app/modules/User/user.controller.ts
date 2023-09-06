import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const insertIntoDB = catchAsync(async (req:Request,res:Response)=>{
  const result = await UserService.insertIntoDB(req.body)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"User Created Successfully",
    data:result
  })
})

const getAllUser = catchAsync(async (req:Request,res:Response)=>{
  const result = await UserService.getAllUser()
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"User retived Successfully",
    data:result
  })
})

const getSingleUser = catchAsync(async (req:Request,res:Response)=>{
  const {id} = req.params
  const result = await UserService.getSingleUser(id)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"User fetched Successfully",
    data:result
  })
})
const updateSingleUser = catchAsync(async (req:Request,res:Response)=>{
  const {id} = req.params
  const updateData = req.body
  const result = await UserService.updateSingleUser(id,updateData)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"User Update Successfully",
    data:result
  })
})

// const loginUser = catchAsync(async (req:Request,res:Response)=>{
  
  
//   const result = await UserService.loginUser(req.body)
//   sendResponse(res,{
//     statusCode:httpStatus.OK,
//     success:true,
//     message:"User Login  Successfully",
//     data:result
//   })
// })

export const UserController ={
  insertIntoDB,
  //loginUser,
  getAllUser,
  getSingleUser,
  updateSingleUser
} 