"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { PersianDatePicker } from "../ui/datepicker";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "عنوان باگ باید حداقل 5 حرف باشد.")
    .max(32, "عنوان باگ نباید بیشتر از 32 حرف باشد."),
  description: z
    .string()
    .min(20, "شرح باگ باید حداقل 20 حرف باشد.")
    .max(100, "شرح باگ باید کمتر از 100 حرف باشد."),
  age: z
    .number()
    .min(0, "عدد باید بزرگتر از صفر باشد"),
  date: z
    .date({ error: issue => issue.input === undefined ? "ورود تاریخ لازم است" : "تاریخ معتبر نیست" })
})



export function BugReportForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      age: 1,
      date: new Date(),
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("شما این مقادیر ارسال کردید:", {
        description: (
          <pre dir="ltr" className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-left",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>گزارش باگ</CardTitle>
        <CardDescription>
          کمک به بهبود مشکلات نرم افزار.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <div>
            <FieldGroup className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <FieldSet >
                <form.Field name="title">
                  {(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>عنوان</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="مثال کلید ورود به سایت عمل نمی کند"
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                </form.Field>
                <form.Field name="description">
                  {(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>شرح</FieldLabel>
                        <InputGroup>
                          <InputGroupTextarea
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="من یک مشکل با کلید ورود به سایت دارم."
                            rows={6}
                            className="min-h-24 resize-none"
                            aria-invalid={isInvalid}
                          />
                          <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums">
                              100/{field.state.value.length} حرف
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        <FieldDescription>
                          شامل مراحل فرایند اصلاح و انتظارات و آنچه باید اتفاق بیوفتد
                        </FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                </form.Field>
              </FieldSet>
              <FieldSet>
                <form.Field name="age">
                  {(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (

                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>سن</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          type="number"
                          // Listen to the onBlur event on the field
                          onBlur={field.handleBlur}
                          // We always need to implement onChange, so that TanStack Form receives the changes
                          onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                </form.Field>
                <form.Field name="date">
                  {(field) => {
                    return (
                      <Field>
                        <FieldLabel>تاریخ</FieldLabel>
                        <PersianDatePicker
                          selected={new Date(field.state.value)}
                          onSelect={(d) => field.handleChange(d!)} />
                      </Field>
                    )
                  }}
                </form.Field>
              </FieldSet>
            </FieldGroup>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="flex justify-end">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            بازنشانی
          </Button>
          <Button type="submit" form="bug-report-form">
            ارسال
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
