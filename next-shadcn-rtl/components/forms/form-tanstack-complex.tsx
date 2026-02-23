"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const addons = [
    {
        id: "analytics",
        title: "Analytics",
        description: "Advanced analytics and reporting",
    },
    {
        id: "backup",
        title: "Backup",
        description: "Automated daily backups",
    },
    {
        id: "support",
        title: "Priority Support",
        description: "24/7 premium customer support",
    },
] as const

const formSchema = z.object({
    plan: z
        .string({
            message: "Please select a subscription plan",
        })
        .min(1, "Please select a subscription plan")
        .refine((value) => value === "basic" || value === "pro", {
            message: "Invalid plan selection. Please choose Basic or Pro",
        }),
    billingPeriod: z
        .string({
            message: "Please select a billing period",
        })
        .min(1, "Please select a billing period"),
    addons: z
        .array(z.string())
        .min(1, "Please select at least one add-on")
        .max(3, "You can select up to 3 add-ons")
        .refine(
            (value) => value.every((addon) => addons.some((a) => a.id === addon)),
            {
                message: "You selected an invalid add-on",
            }
        ),
    emailNotifications: z.boolean(),
})

export function FormTanstackComplex() {
    const form = useForm({
        defaultValues: {
            plan: "basic",
            billingPeriod: "monthly",
            addons: [] as string[],
            emailNotifications: false,
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            toast("You submitted the following values:", {
                description: (
                    <pre dir="ltr" className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
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
        <Card className="w-full">
            <CardContent>
                <form
                    id="subscription-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <FieldSet>
                            <form.Field
                                name="plan">
                                {(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <FieldSet>
                                            <FieldLegend>Subscription Plan</FieldLegend>
                                            <FieldDescription>
                                                Choose your subscription plan.
                                            </FieldDescription>
                                            <RadioGroup
                                                name={field.name}
                                                value={field.state.value}
                                                onValueChange={field.handleChange}
                                                dir="rtl"
                                            >
                                                <FieldLabel htmlFor="basic">
                                                    <Field
                                                        orientation="horizontal"
                                                        data-invalid={isInvalid}
                                                    >
                                                        <RadioGroupItem
                                                            value="basic"
                                                            id="basic"
                                                            aria-invalid={isInvalid}
                                                        />
                                                        <FieldContent>
                                                            <FieldTitle>Basic</FieldTitle>
                                                            <FieldDescription>
                                                                For individuals and small teams
                                                            </FieldDescription>
                                                        </FieldContent>
                                                    </Field>
                                                </FieldLabel>
                                                <FieldLabel htmlFor="pro">
                                                    <Field
                                                        orientation="horizontal"
                                                        data-invalid={isInvalid}
                                                    >
                                                        <RadioGroupItem
                                                            value="pro"
                                                            id="pro"
                                                            aria-invalid={isInvalid}
                                                        />
                                                        <FieldContent>
                                                            <FieldTitle>Pro</FieldTitle>
                                                            <FieldDescription>
                                                                For businesses with higher demands
                                                            </FieldDescription>
                                                        </FieldContent>
                                                    </Field>
                                                </FieldLabel>
                                            </RadioGroup>
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </FieldSet>
                                    )
                                }}
                            </form.Field>
                            <FieldSeparator />
                            <form.Field
                                name="billingPeriod">
                                {(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor={field.name}>Billing Period</FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.state.value}
                                                onValueChange={field.handleChange}
                                                aria-invalid={isInvalid}
                                                dir="rtl"
                                            >
                                                <SelectTrigger id={field.name}>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="monthly">Monthly</SelectItem>
                                                    <SelectItem value="yearly">Yearly</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FieldDescription>
                                                Choose how often you want to be billed.
                                            </FieldDescription>
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>
                            <FieldSeparator className="lg:hidden" />
                        </FieldSet>
                        <FieldSet>
                            <form.Field
                                name="addons"
                                mode="array">
                                {(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <FieldSet>
                                            <FieldLegend>Add-ons</FieldLegend>
                                            <FieldDescription>
                                                Select additional features you&apos;d like to include.
                                            </FieldDescription>
                                            <FieldGroup data-slot="checkbox-group">
                                                {addons.map((addon) => (
                                                    <Field
                                                        key={addon.id}
                                                        orientation="horizontal"
                                                        data-invalid={isInvalid}
                                                    >
                                                        <Checkbox
                                                            id={addon.id}
                                                            name={field.name}
                                                            aria-invalid={isInvalid}
                                                            checked={field.state.value.includes(addon.id)}
                                                            onCheckedChange={(checked) => {
                                                                if (checked) {
                                                                    field.pushValue(addon.id)
                                                                } else {
                                                                    const index = field.state.value.indexOf(
                                                                        addon.id
                                                                    )
                                                                    if (index > -1) {
                                                                        field.removeValue(index)
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                        <FieldContent>
                                                            <FieldLabel htmlFor={addon.id}>
                                                                {addon.title}
                                                            </FieldLabel>
                                                            <FieldDescription>
                                                                {addon.description}
                                                            </FieldDescription>
                                                        </FieldContent>
                                                    </Field>
                                                ))}
                                            </FieldGroup>
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </FieldSet>
                                    )
                                }}
                            </form.Field>
                            <FieldSeparator />
                            <form.Field
                                name="emailNotifications">
                                {(field) => {
                                    const isInvalid =
                                        field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field orientation="horizontal" data-invalid={isInvalid}>
                                            <FieldContent>
                                                <FieldLabel htmlFor={field.name}>
                                                    Email Notifications
                                                </FieldLabel>
                                                <FieldDescription>
                                                    Receive email updates about your subscription
                                                </FieldDescription>
                                            </FieldContent>
                                            <Switch
                                                id={field.name}
                                                name={field.name}
                                                checked={field.state.value}
                                                onCheckedChange={field.handleChange}
                                                aria-invalid={isInvalid}
                                            />
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>
                        </FieldSet>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal" className="justify-end">
                    <Button type="submit" form="subscription-form">
                        Save Preferences
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}
