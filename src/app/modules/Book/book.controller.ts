import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./book.service";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./book.constant";

const insertIntoDB = catchAsync(async (req:Request,res:Response)=>{
  const result = await BookService.insertIntoDB(req.body)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Book Created Successfully",
    data:result
  })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await BookService.getAllFromDB(filters, options);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books fetched successfully',
      meta: result.meta,
      data: result.data
  });
});

const getBookByCategory = catchAsync(async (req: Request, res: Response) => {
const {id} = req.params
  const result = await BookService.getBookByCategory(id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books with associated category data fetched successfully',
      data: result
  });
});

const singleBookDB = catchAsync(async (req: Request, res: Response) => {
const {id} = req.params
  const result = await BookService.singleBookDB(id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book fetched successfully',
      data: result
  });
});

const singleBookUpdate = catchAsync(async (req: Request, res: Response) => {
const {id} = req.params
const updatedata = req.body
  const result = await BookService.singleBookUpdate(id,updatedata);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully',
      data: result
  });
});
const deleteBook = catchAsync(async (req: Request, res: Response) => {
const {id} = req.params
  const result = await BookService.deleteBook(id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book delete successfully',
      data: result
  });
});

export const BookController ={
  insertIntoDB,
  getAllFromDB,
  getBookByCategory,
  singleBookDB,
  singleBookUpdate,
  deleteBook
} 