import { useContext } from 'react'
import  { TaskContext }  from '../context/TaskContext'

function TaskCard({task}) {
    const { deleteTask } = useContext(TaskContext)

    return (
        <div className='bg-gray-800 text-white p-4 rounded-3xl hover:bg-gray-700'>  {/* COMPONENTE HIJO */}
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-500 text-sm mt-2'>{task.description}</p>
            <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}> {/* Cuando de un click recien se va a ejecutar esta funcion*/}
                Delete task
            </button>
        </div>
    )
}

export default TaskCard