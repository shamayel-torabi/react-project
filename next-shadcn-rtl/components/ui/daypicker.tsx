"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

type Props = {
  selected?: Date;
  onSelect?:(date: Date | undefined) => void;
}

export function DatePicker({ selected, onSelect }: Props) {
  const [date, setDate] = useState<Date | undefined>(selected)

  const format = (date: Date): string => {
    return new Date(date).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  const handleSelect = (selected: Date) => {
    onSelect?.(selected);
    setDate(selected);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
        >
          {date ? format(date) : <span>Pick a date</span>}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          defaultMonth={date}
          required
        />
      </PopoverContent>
    </Popover>
  )
}
