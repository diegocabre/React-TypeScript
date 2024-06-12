import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea ] = useState<string>('')
    const [listaTareas, setListaTareas] = useState <string[]>([])

    const handleAdd = () => {
        setListaTareas([...listaTareas, nuevaTarea])
        setNuevaTarea('')
    }   

    const handleDelete = (index: number) => {
        setListaTareas([...listaTareas.slice(0, index), ...listaTareas.slice(index + 1)])
    }
  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Escribe una tarea" />
        <button onClick={handleAdd}>Agregar</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea= {handleDelete} ></ListaTareas>
    </div>
  )
}