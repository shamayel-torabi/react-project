"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { login } from "../actions/login";


export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(login, undefined,);

  if (errorMessage)
    return <p>{errorMessage}</p>
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={formAction} className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">خوش آمدید</h1>
                <p className="text-muted-foreground text-balance">
                  با حساب کاربری خود وارد وبگاه شوید
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">رایانامه</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  dir="ltr"
                />
              </Field>
              <Field >
                <FieldLabel htmlFor="password">گذرواژه</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  dir="ltr"
                />
              </Field>
              <Field>
                <Button type="submit" aria-disabled={isPending}>ورود</Button>
              </Field>
              <FieldDescription className="text-center">
                حساب کابری در این وبگاه ندارید <a href="/register">ثبت نام</a> کنید
              </FieldDescription>
              {errorMessage && (
                <FieldError>
                  {errorMessage}
                </FieldError>
              )}
            </FieldGroup>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
