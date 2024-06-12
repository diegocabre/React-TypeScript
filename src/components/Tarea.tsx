type Props = {
    tarea: string
    borrarTarea: (index: number) => void
}

export const Tarea = ({tarea, borrarTarea}: Props) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={() => borrarTarea(0)}>X</button>  
    </div>
  )
}