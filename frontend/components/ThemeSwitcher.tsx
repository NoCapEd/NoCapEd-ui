'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
    }
  }, [theme]);

  if (!mounted) {
    return null
  }

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-background text-text border border-text rounded px-2 py-1"
    >
      <option value="default">Default Theme</option>
      <option value="theme-blue">Blue Theme</option>
      <option value="theme-green">Green Theme</option>
      <option value="theme-purple">Purple Theme</option>
    </select>
  )
}

export default ThemeSwitcher