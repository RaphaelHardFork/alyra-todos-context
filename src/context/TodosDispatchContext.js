import { useContext, createContext } from 'react'

export const TodosDispatchContext = createContext()

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext)
  if (context === undefined) {
    throw new Error(`You should use useTodosDispatchContext.Provider`)
  }
  return context
}