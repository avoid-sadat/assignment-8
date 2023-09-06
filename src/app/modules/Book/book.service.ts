import { Book, Prisma, PrismaClient } from "@prisma/client";
import { IBookFilterRequest } from "./book.interface";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { bookRelationalFields, bookRelationalFieldsMapper, bookSearchableFields } from "./book.constant";

const prisma = new PrismaClient()

const insertIntoDB = async (data:Book):Promise<Book> =>{
  const result = await prisma.book.create({
    data
  })
  return result
}



const getAllFromDB = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
      andConditions.push({
          OR: bookSearchableFields.map((field) => ({
              [field]: {
                  contains: searchTerm,
                  mode: 'insensitive'
              }
          }))
      });
  }

  if (Object.keys(filterData).length > 0) {
      andConditions.push({
          AND: Object.keys(filterData).map((key) => {
              if (bookRelationalFields.includes(key)) {
                  return {
                      [bookRelationalFieldsMapper[key]]: {
                          id: (filterData as any)[key]
                      }
                  };
              } else {
                  return {
                      [key]: {
                          equals: (filterData as any)[key]
                      }
                  };
              }
          })
      });
  }

  const whereConditions: Prisma.BookWhereInput =
      andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
      include: {
          category: true
      },
      where: whereConditions,
      skip,
      take: limit,
      orderBy:
          options.sortBy && options.sortOrder
              ? { [options.sortBy]: options.sortOrder }
              : {
                  createdAt: 'desc'
              }
  });
  const total = await prisma.book.count({
      where: whereConditions
  });

  return {
      meta: {
          total,
          page,
          limit
      },
      data: result
  };
};

const getBookByCategory = async (id:string):Promise<Book[]|null> =>{
  const result = await prisma.book.findMany({
    where:{
      id
    }
  })
  return result
}

const singleBookDB = async (id:string):Promise<Book | null> =>{
  const result = await prisma.book.findUnique({
    where:{
      id
    }
  })
  return result
}

const singleBookUpdate = async (id: string,payload:Partial<Book>):Promise<Book | null> =>{
  const result = await prisma.book.update({
    where:{
      id
    },
    data:payload
  })
  return result
}

const deleteBook = async(id: string):Promise<Book |null> =>{
  const result = await prisma.book.delete({
    where:{
      id
    }
  })
  return result
}

export const BookService = {
  insertIntoDB,
  getAllFromDB,
  getBookByCategory,
  singleBookDB,
  singleBookUpdate,
  deleteBook
}