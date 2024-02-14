"use server";

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { revalidatePath } from "next/cache";
import { z } from "zod";


// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function checkLogin(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
  });
  const parse = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return { message: "Failed to login" };
  }

  const data = parse.data;
  cookies().set({
    name: 'username',
    value: data.username,
    auth: true,
    sameSite: 'lax'
  })
  redirect('/user')
  console.log(data)

}