import { useContext } from 'react'
import  {TaskContext}  from '../context/TaskContext'

function TaskCard({task}) {
    const { deleteTask } = useContext(TaskContext)

    return (
        <div>  {/* COMPONENTE HIJO */}
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            <button onClick={() => deleteTask(task.id)}> {/* Cuando de un click recien se va a ejecutar esta funcion*/}
                delete task
            </button>
        </div>
    )
}

export default TaskCard
// 