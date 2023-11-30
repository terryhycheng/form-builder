'use server';

import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/db";
import { MaskCharacter } from "@/lib/helpers";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

class UserNotFoundErr extends Error {}

export async function CreateAPIKey() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
      throw new UserNotFoundErr();
  }

  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 32) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
  }
  const key = result

  const user = await prisma.user.update({
      where: {
        id: session?.user.id
      },
      data: {
          apiKey: key
      },
  });

  revalidatePath('/settings');
  return user
}

export async function RemoveAPIKey() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
      throw new UserNotFoundErr();
  }

  const user = await prisma.user.update({
      where: {
        id: session?.user.id
      },
      data: {
          apiKey: null
      },
  });

  revalidatePath('/settings');
  return user
}

export async function FetchUserDetails() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
      throw new UserNotFoundErr();
  }

  const user = await prisma.user.findUnique({
      where: {
        id: session?.user.id
      }
  });

  return user;
}
