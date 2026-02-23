"use client"

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
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const spokenLanguages = [
    { label: "انگلیسی", value: "en" },
    { label: "اسپانیایی", value: "es" },
    { label: "فرانسوی", value: "fr" },
    { label: "آلمانی", value: "de" },
    { label: "ایتالیایی", value: "it" },
    { label: "چینی", value: "zh" },
    { label: "ژاپنی", value: "ja" },
] as const

const formSchema = z.object({
    language: z
        .string()
        .min(1, "Please select your spoken language.")
        .refine((val) => val !== "auto", {
            message:
                "Auto-detection is not allowed. Please select a specific language.",
        }),
})

export function FormTanstackSelect() {
    const form = useForm({
        defaultValues: {
            language: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            toast("You submitted the following values:", {
                description: (
                    <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                        <code>{JSON.stringify(value, null, 2)}</code>
                    </pre>
                ),
                position: "bottom-right",
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
        <Card className="w-full md:max-w-lg">
            <CardHeader>
                <CardTitle>Language Preferences</CardTitle>
                <CardDescription>
                    Select your preferred spoken language.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="form-tanstack-select"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup>
                        <form.Field
                            name="language">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field orientation="responsive" data-invalid={isInvalid}>
                                        <FieldContent>
                                            <FieldLabel htmlFor="form-tanstack-select-language">
                                                Spoken Language
                                            </FieldLabel>
                                            <FieldDescription>
                                                For best results, select the language you speak.
                                            </FieldDescription>
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </FieldContent>
                                        <Select
                                            name={field.name}
                                            value={field.state.value}
                                            onValueChange={field.handleChange}
                                            dir="rtl"
                                        >
                                            <SelectTrigger
                                                id="form-tanstack-select-language"
                                                aria-invalid={isInvalid}
                                                className="min-w-[120px]"
                                            >
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="item-aligned">
                                                <SelectItem value="auto">خودکار</SelectItem>
                                                <SelectSeparator />
                                                {spokenLanguages.map((language) => (
                                                    <SelectItem
                                                        key={language.value}
                                                        value={language.value}
                                                    >
                                                        {language.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                )
                            }}
                        </form.Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal" className="flex justify-end">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-tanstack-select">
                        Save
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}
