import { PrismaClient, ReviewAndRating} from "@prisma/client";

const prisma = new PrismaClient()

const insertIntoDB = async (data:ReviewAndRating):Promise<ReviewAndRating> =>{
  const result = await prisma.reviewAndRating.create({
    data
  })
  return result
}

export const ReviewAndRatingService = {
  insertIntoDB
}