import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const insertIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data
  })
  return result
}

const getAllCategory = async () =>{
  const result = await prisma.category.findMany()
  return result
}
const getSingleCategory = async (id:string):Promise<Category |null> =>{
  const result = await prisma.category.findUnique({
    where:{
      id
    }
  })
  return result
}

export const CategoryService = {
  insertIntoDB,
  getAllCategory,
  getSingleCategory
}