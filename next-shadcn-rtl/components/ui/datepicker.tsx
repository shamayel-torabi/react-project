"use client"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "./input"
import { Button } from "./button"
import { Field, FieldLabel } from "./field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group"


function formatDate(date: Date | undefined) {
  if (!date) {
    return ''
  }

  return date.toLocaleDateString('fa-IR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }

  return !isNaN(date.getTime())
}

type Props = {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

// export const PersianDatePicker = ({ selected, onSelect }: Props) => {
//   const [open, setOpen] = useState(false);
//   const [date, setDate] = useState<Date | undefined>(selected);
//   const [month, setMonth] = useState<Date | undefined>(date);
//   const [value, setValue] = useState(formatDate(date));

//   const handleSelect = (selected: Date | undefined) => {
//     setDate(selected);
//     setValue(formatDate(selected));
//     onSelect?.(selected);
//     setOpen(false);
//   }

//   return (
//     <div className='w-full'>
//       <div className='relative flex gap-2'>
//         <Input
//           id='date'
//           value={value}
//           placeholder='January 01, 2025'
//           className='bg-background'
//           readOnly
//           onChange={e => {
//             const date = new Date(e.target.value)

//             setValue(e.target.value)

//             if (isValidDate(date)) {
//               setDate(date)
//               setMonth(date)
//             }
//           }}
//           onKeyDown={e => {
//             if (e.key === 'ArrowDown') {
//               e.preventDefault()
//               setOpen(true)
//             }
//           }}
//         />
//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <Button id='date-picker' variant='ghost' className='absolute top-1/2 left-2 size-6 -translate-y-1/2'>
//               <CalendarIcon className='size-3.5' />
//               <span className='sr-only'>انتخاب تاریخ</span>
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className='w-auto overflow-hidden p-0' align='end' alignOffset={-8} sideOffset={10}>
//             <Calendar
//               mode='single'
//               selected={date}
//               month={month}
//               onMonthChange={setMonth}
//               onSelect={handleSelect}
//             />
//           </PopoverContent>
//         </Popover>
//       </div>
//     </div>
//   )
// }


export function PersianDatePicker({ selected, onSelect }: Props) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(selected)
  const [month, setMonth] = useState<Date | undefined>(date)
  const [value, setValue] = useState(formatDate(date))

  const handleSelect = (selected: Date | undefined) => {
    setDate(selected);
    setValue(formatDate(selected));
    onSelect?.(selected);
    setOpen(false);
  }

  return (
    <>
      <InputGroup>
        <InputGroupInput
          id="date-required"
          value={value}
          placeholder="انتخاب تاریخ"
          readOnly
          onChange={(e) => {
            const date = new Date(e.target.value)
            setValue(e.target.value)
            if (isValidDate(date)) {
              setDate(date)
              setMonth(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton
                id="date-picker"
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
              >
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={handleSelect}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </>
  )
}
