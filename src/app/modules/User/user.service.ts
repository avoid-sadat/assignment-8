import { PrismaClient, User } from "@prisma/client";
// import { ILoginUser} from "./user.constant";
// import ApiError from "../../../errors/ApiError";
// import httpStatus from "http-status";


const prisma = new PrismaClient()

const insertIntoDB = async (data:User):Promise<User> =>{
  const result = await prisma.user.create({
    data
  })
  return result
}

// const loginUser = async (payload: ILoginUser): Promise<ILoginUser> => {
//   const { email, password } = payload;

//   // Find users with the same email
//   const usersWithSameEmail = await prisma.user.findMany({ where: { email } });

//   if (usersWithSameEmail.length === 0) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
//   }

//   // Loop through the found users and check if the provided password matches any user's password
//   let authenticatedUser = null;

//   for (const user of usersWithSameEmail) {
//     if (user.password === password) {
//       authenticatedUser = user;
//       break; // Exit the loop as soon as a matching user is found
//     }
//   }

//   if (!authenticatedUser) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
//   }

//   return authenticatedUser; // Return the authenticated user
// }

const getAllUser = async ()=>{
  const result = await prisma.user.findMany()
  return result
}

const getSingleUser = async(id:string):Promise<User| null>=>{
  const result = await prisma.user.findUnique({
    where:{
      id
    }
  })
  return result
}

const updateSingleUser = async(id:string,payload:Partial<User>):Promise<User> =>{
  const result = await prisma.user.update({
    where:{
      id
    },
    data:payload
  })
  return result
}





export const UserService = {
  insertIntoDB,
 // loginUser,
 getAllUser,
 getSingleUser,
 updateSingleUser
}