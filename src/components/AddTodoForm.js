import { useTodosDispatch } from '../context/TodosDispatchContext'
import { useDarkMode } from '../context/DarkModeContext'
import { v4 as uuidv4 } from "uuid"


const AddTodoForm = () => {
  const disptach = useTodosDispatch()
  const darkMode = useDarkMode()
  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    //setTodos([...todos, newTodo])
    disptach({ type: 'ADD', payload: newTodo })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newTodoText = event.target.elements.todo.value
    addTodo(newTodoText)
    event.target.reset()
  }
  const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className={`input-group-text ${modeClass}`} htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${modeClass}`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  )
}

export default AddTodoForm
