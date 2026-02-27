
"use server";
import { z } from "zod"


const formSchema = z.object({
    username: z
        .string()
        .min(1, "باید نام کاربری وارد کنید.")
        .max(20, "نام کاربری باید کمتر از 20 حرف باشد"),
    password: z
        .string()
        .min(8, "گذرواژه باید بیشتر از 8 حرف باشد")
        .max(20, "گذرواژه باید کمتر از 20 حرف باشد"),
    remember: z.boolean(),
    count: z.number(),
})

export type FormState = {
    data: z.infer<typeof formSchema>,
    errors?: z.ZodError<{
        username: string;
        password: string;
        remember: boolean;
        count: number;
    }>
}

export async function test(prevState: FormState | undefined, formData: FormData) {
    prevState = {
        data: {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
            remember: !!formData.get("remember"),
            count: parseInt(formData.get("count") as string)
        },
    }

    const parseState = formSchema.safeParse(prevState.data);
    if (parseState.success) {
        const { username, password, remember, count } = parseState.data;

        return {
            data: {
                username,
                password,
                remember,
                count: count + 1
            },
        }
    }
    else {
        return {
            data: { ...prevState.data },
            errors: z.flattenError(parseState.error).fieldErrors
        }
    }
}