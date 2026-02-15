"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlertTriangleIcon, BotIcon, CheckIcon, ChevronDownIcon, CopyIcon, ShareIcon, TrashIcon, UserRoundXIcon, VolumeOffIcon } from "lucide-react";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { AudioLinesIcon, PlusIcon } from "lucide-react"
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function ButtonGroupeDemo() {
    return (
        <Card className="@container/card  h-full">
            <CardHeader>
                <CardTitle>دکمه گروهی</CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-6 flex gap-4">
                <ButtonGroupPopover />
                <ButtonGroupDropdown />
                <ButtonGroupInputGroup />
                <ButtonGroupInput/>
            </CardContent>
        </Card>)
}

function ButtonGroupPopover() {
    return (
        <ButtonGroup>
            <Button variant="outline">
                <BotIcon /> کوپایلت
            </Button>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Open Popover">
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="rounded-xl text-sm">
                    <PopoverHeader>
                        <PopoverTitle>Start a new task with Copilot</PopoverTitle>
                        <PopoverDescription>
                            Describe your task in natural language.
                        </PopoverDescription>
                    </PopoverHeader>
                    <Field>
                        <FieldLabel htmlFor="task" className="sr-only">
                            Task Description
                        </FieldLabel>
                        <Textarea
                            id="task"
                            placeholder="I need to..."
                            className="resize-none"
                        />
                        <FieldDescription>
                            Copilot will open a pull request for review.
                        </FieldDescription>
                    </Field>
                </PopoverContent>
            </Popover>
        </ButtonGroup>
    )
}

function ButtonGroupDropdown() {
    return (
        <ButtonGroup>
            <Button variant="outline">پیروی</Button>
            <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="!pl-2">
                        <ChevronDownIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <VolumeOffIcon />
                            Mute Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CheckIcon />
                            Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <AlertTriangleIcon />
                            Report Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <UserRoundXIcon />
                            Block User
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ShareIcon />
                            Share Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CopyIcon />
                            Copy Conversation
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                            <TrashIcon />
                            Delete Conversation
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </ButtonGroup>
    )
}


function ButtonGroupInputGroup() {
    const [voiceEnabled, setVoiceEnabled] = useState(false)
    return (
        <ButtonGroup className="[--radius:9999rem]">
            <ButtonGroup>
                <InputGroup>
                    <InputGroupInput
                        placeholder={
                            voiceEnabled ? "ظبط و ارسال صدا..." : "ارسال یک پیام..."
                        }
                        disabled={voiceEnabled}
                    />
                    <InputGroupAddon align="inline-end">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <InputGroupButton
                                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                                    size="icon-xs"
                                    data-active={voiceEnabled}
                                    className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                                    aria-pressed={voiceEnabled}
                                >
                                    <AudioLinesIcon />
                                </InputGroupButton>
                            </TooltipTrigger>
                            <TooltipContent>Voice Mode</TooltipContent>
                        </Tooltip>
                    </InputGroupAddon>
                </InputGroup>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline" size="icon">
                    <PlusIcon />
                </Button>
            </ButtonGroup>
        </ButtonGroup>
    )
}

function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="جستجو..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}

