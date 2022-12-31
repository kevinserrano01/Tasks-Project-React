import TaskCard from './TaskCard'
import { useContext } from 'react'
import  {TaskContext}  from '../context/TaskContext'

function TaskList() {
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1>No hay tareas aun</h1>
    }
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/> // por cada componente que se cree le va a pasar una tarea
            ))}
        </div>
    );
}

export default TaskList