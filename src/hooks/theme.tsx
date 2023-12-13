import { useEffect, useState } from 'react'
export type Theme = 'light' | 'dark'

type Hook = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  setThemeMode: (mode: Theme) => void
}

/* Dark theme enable by default */
export const useTheme = (): Hook => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark',
  )

  const setThemeMode = (mode: Theme): void => {
    setTheme(mode)
    localStorage.setItem('theme', mode)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add('dark')
  }, [theme, setTheme])

  return {
    theme,
    setTheme,
    setThemeMode,
  }
}
