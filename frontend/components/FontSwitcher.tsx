
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const FontSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { font, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (font) {
      document.documentElement.className = font;
    }
  }, [font]);

  if (!mounted) {
    return null
  }

return (
    <select
      value={font}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-background text-text border border-text rounded px-2 py-1"
    >
      <option value="default">Default Font</option>
      <option value="font-fredoka">Fredoka Font</option>
      <option value="font-baloo-bhai-2">Baloo Bhai 2 Font</option>
      <option value="font-chewy">Chewy Font</option>
      <option value="font-comic-neue">Comic Neue Font</option>
    </select>
  )
}

  export default FontSwitcher;