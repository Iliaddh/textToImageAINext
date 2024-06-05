import { getAuth } from "@clerk/nextjs/server";

import prisma from "@/app/lib/prisma";
import { MAX_FREE_COUNTS } from "@/constants/constants";

export const increaseLimit = async (req) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return;
  }
  

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });

  if(userApiLimit){
    await prisma.userApiLimit.update({
        where: {
          userId: userId,
        },
        data: {
          count: userApiLimit.count + 1,
        },
      });
  }else{
    await prisma.userApiLimit.create({
        data: {
          userId: userId,
          count: 1,
        },
      });

  }
};

export const checkLimit = async (req) => {
    const { userId } = getAuth(req);
    
    if (!userId) {
        return;
    }
    
    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
        userId: userId,
        },
    });
    
    
    
    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    }else{
        return false;
    }
    }


export const  getApiLimitCount = async (userId) => {
  // const {userId} = getAuth(req);

  if(!userId){
    return 0;
  }
const userApiLimit = await prisma.userApiLimit.findUnique({
  where: {
    userId: userId,
  },
});

if(!userApiLimit){
  return 0;
}

return userApiLimit.count;

}