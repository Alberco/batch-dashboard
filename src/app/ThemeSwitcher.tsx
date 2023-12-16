'use client'

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="text-xs flex flex-col justify-center items-center gap-2">
      <button  className="border-2 border-white/10 p-1 rounded-xl bg-white/5 max-w-min" onClick={() => setTheme('light')}>
        <Sun color={`${theme === "light" ?  'black': 'white'}`} />
      </button>
      <button  className="border-2 border-white/10 p-1 rounded-xl bg-white/5 max-w-min" onClick={() => setTheme('dark')}>
        <Moon color={`${theme === "light" ?  'black': 'white'}`}/>
      </button>
    </div>
  )
};