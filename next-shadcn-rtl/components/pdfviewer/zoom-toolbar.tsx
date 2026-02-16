'use client'

import {
  useZoom,
  ZoomMode,
} from '@embedpdf/plugin-zoom/react'
import { ZoomIn, ZoomOut, ChevronDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ButtonGroup } from '../ui/button-group'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ZoomToolbarProps {
  documentId: string
}

export const ZoomToolbar = ({ documentId }: ZoomToolbarProps) => {
  const { provides: zoom, state } = useZoom(documentId)
  const [_, setInputValue] = useState('');
  const zoomPercentage = Math.round(state.currentZoomLevel * 100);

  //Sync input value with zoom state when it changes externally
  useEffect(() => {
    setInputValue(zoomPercentage.toString());
  }, [zoomPercentage]);


  if (!zoom) return null

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-gray-300 bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
      {/* Zoom controls */}
      <div className="flex items-center rounded">
        <ButtonGroup>
          <Button variant="ghost" onClick={zoom.zoomOut} title='کوچک نمایی'><ZoomOut size={12} /></Button>
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className='w-16 text-center'>
                <span>{`${zoomPercentage}`}%</span>
                <ChevronDownIcon className="h-6 w-6 transition-transform" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => zoom.requestZoom(25 / 100)}>25 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(50 / 100)}>50 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(100 / 100)}>100 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(150 / 100)}>125 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(150 / 100)}>150 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(200 / 100)}>200 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(400 / 100)}>400 %</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(800 / 100)}>800 %</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => zoom.requestZoom(ZoomMode.FitWidth)}>عرض صفحه</DropdownMenuItem>
                <DropdownMenuItem onClick={() => zoom.requestZoom(ZoomMode.FitPage)}>طول صفحه</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" onClick={zoom.zoomIn} title='بزرگنمایی'><ZoomIn size={12} /></Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
