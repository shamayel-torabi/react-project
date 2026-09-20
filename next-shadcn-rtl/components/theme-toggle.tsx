"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () =>{
    if(theme === 'dark')
      setTheme("light");
    else if(theme === 'light')
      setTheme("dark");
    else
      setTheme("system");
  }

  return (
    <button className="text-gray-800 dark:text-gray-200 hover:opacity-60 flex items-center" onClick={toggle}>
      {theme === 'dark' ? 
        <Sun className="size-5"/>
      : <Moon className="size-5" />}
    </button>
  );
}
