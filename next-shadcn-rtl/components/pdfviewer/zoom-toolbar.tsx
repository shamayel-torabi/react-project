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
            <DropdownMenuItem onClick={zoom.zoomIn} title='بزرگنمایی'><ZoomIn size={12} />بزرگنمایی</DropdownMenuItem>
            <DropdownMenuItem onClick={zoom.zoomOut} title='کوچک نمایی'><ZoomOut size={12} />کوچک نمایی</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
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
            <DropdownMenuItem onClick={() => zoom.requestZoom(ZoomMode.FitWidth)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" className="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path><path d="M10 18h-7"></path><path d="M21 18h-7"></path><path d="M6 15l-3 3l3 3"></path><path d="M18 15l3 3l-3 3"></path></svg>
              <span>عرض صفحه</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => zoom.requestZoom(ZoomMode.FitPage)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" className="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path><path d="M18 14v7"></path><path d="M18 3v7"></path><path d="M15 18l3 3l3 -3"></path><path d="M15 6l3 -3l3 3"></path></svg>
              <span>طول صفحه</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" onClick={zoom.zoomIn} title='بزرگنمایی'><ZoomIn size={12} /></Button>
    </ButtonGroup>
  )
}
