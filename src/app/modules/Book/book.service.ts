import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const insertIntoDB = async (data:Book):Promise<Book> =>{
  const result = await prisma.book.create({
    data
  })
  return result
}

export const BookService = {
  insertIntoDB
}