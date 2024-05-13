"use server"

import {z} from "zod"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?:{
    title?: string[]
  },
  message?: string | null
}

const CreateBoard = z.object({
    title: z.string().min(3, {
      message:"Minimum word length is 3"
    }),
})
export async function create(prevState: State,formData: FormData) {
    const validatedFields = CreateBoard.safeParse({
        title:formData.get("title")
      })
      if (!validatedFields.success){
        return{
          errors: validatedFields.error.flatten().fieldErrors,
          message:"Missing fields."
        }
      }

      const {title} = validatedFields.data;
      try {
        await db.board.create({
          data:{
            title,
          }
        });
      } catch (error) {
        return {
          message: "DB error"
        }
      }

    revalidatePath("organization/org_2gOm3PgT50OHEYxIIrm1N7fghnG")
    redirect("/organization/org_2gOm3PgT50OHEYxIIrm1N7fghnG")
}