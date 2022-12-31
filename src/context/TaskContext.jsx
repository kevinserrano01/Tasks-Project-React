import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext() // retorna un objeto

export function TaskContextProvider(props) {

    const [tasks, setTask] = useState([])

    function createTask(task){
        setTask([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }
    
    function deleteTask(taskId) {
        setTask(tasks.filter(task => task.id !== taskId)) // por cada id de cada tarea comparar si es el mismo id que me estan pasando. Si coincide la id lo elimina de la lista. Una vez terminado de recorrer guardo ese nuevo array en el "setTask"
    }

    useEffect(() => { //Cuando cargue el componente voy a establecer tareas del otro archivo 'tasks.js'
        setTask(data)
    }, [])

    return (
        <TaskContext.Provider 
        value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}