import prisma from "../lib/prisma";
import { User } from "@prisma/client";

export async function createUser(data) {
  try {
    const user = await prisma.user.create({data}); 
    return {user}
  } catch (error) {
    console.log(error)
  }
}

export async function getUserById(id, clerkUserId) {
  try {
    if (!id && !clerkUserId)
      return { error: "You must provide an id or clerkUserId" };
    const query = id ? { id } : { clerkUserId };

    const user = await prisma.user.findUnique({ where: query });

    return { user };
  } catch (error) {
    return { error };
  }
}

export async function updateUser(id, data) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
