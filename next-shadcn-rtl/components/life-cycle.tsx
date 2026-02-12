"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar"
import { DatePicker, PersianDatePicker } from "./ui/daypicker";
import { Label } from "./ui/label";


export const Lifecycle = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const handleSelect = (selected: Date | undefined) => {
        setDate(selected);
    }

    return (
        <Card className="@container/card ">
            <CardHeader>
                <CardTitle>طول عمر</CardTitle>
                <CardDescription>
                    <span className="hidden @[540px]/card:block">
                        مجموع سه ماه گذشته
                    </span>
                    <span className="@[540px]/card:hidden">Last 3 months</span>
                </CardDescription>

            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 flex gap-5">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect} required />

                <div className='w-full max-w-xs space-y-2'>
                    <Label htmlFor='date' className='px-1'>
                        انتخاب تاریخ درون یک ورودی متن
                    </Label>
                    <PersianDatePicker selected={date} onSelect={handleSelect}/>
                </div>

                {/* <DatePicker selected={date} onSelect={handleSelect} /> */}
            </CardContent>
        </Card>
    )
}