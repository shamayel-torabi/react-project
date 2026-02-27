"use client"
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { FormState, test } from "@/app/actions/test";


async function increment(previousState: FormState, formData: FormData) {
    let state = test(previousState, formData)
    return state;
}

export const FormSubmitDemo = () => {
    const [state, formAction] = useActionState(increment, {
        data: {
            username: "",
            password: "",
            remember: false,
            count: 0
        }
    });

    return (
        <Card className="w-full">
            <CardContent className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-1/2">
                    <form action={formAction} >
                        <FieldGroup>
                            <Field >
                                <FieldLabel htmlFor="username">نام کاربری</FieldLabel>
                                <Input id="username" name="username" defaultValue={state.data.username} />
                                {state.errors?.username && (
                                    <FieldError errors={state.errors.username.map(m => { return { message: m } })} />
                                )}
                            </Field>

                            <Field className="mb-2">
                                <FieldLabel htmlFor="password">گذرواژه</FieldLabel>
                                <Input type="password" id="password" name="password" defaultValue={state.data.password} />
                                {state.errors?.password && (
                                    <FieldError errors={state.errors.password.map(m => { return { message: m } })} />
                                )}

                            </Field>
                            <Field orientation="horizontal">
                                <input type="checkbox" id="remember" name="remember" defaultChecked={state.data.remember} />
                                <FieldContent>
                                    <FieldLabel htmlFor="remember">
                                        بخاطر سپردن
                                    </FieldLabel>
                                    <FieldDescription>
                                        نام کاربری و گذرواژه ذخیره می شود.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <div className="mb-2 flex justify-self-end">
                            <Button type="submit">ارسال</Button>
                        </div>
                        <input hidden type="number" name="count" defaultValue={state.data.count} />
                    </form>
                </div>
                <div className="w-1/2">
                    <pre dir="ltr" >{JSON.stringify(state, null, 2)}</pre>
                </div>
            </CardContent>
        </Card >

    )
}