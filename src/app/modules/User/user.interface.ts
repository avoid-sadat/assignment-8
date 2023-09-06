// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export type IUser= {
  id: string;
  role: string;
  password: string;
}

// export type user ={
//   isUserExist(id: string): Promise<Pick<IUser, 'id' | 'password' | 'role'>>;
//   isPasswordMatched(givenPassword: string, savedPassword: string): Promise<boolean>;
// }
