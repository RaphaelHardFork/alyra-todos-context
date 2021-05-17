import { useContext, createContext } from 'react'

export const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error(`You should use useDarkMode.Provider`)
  }
  return context
}