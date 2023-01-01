import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("") // guardar el titulo de una tarea
    const [description, setDescription] = useState("") // guardar la descripcion de una tarea
    const {createTask} = useContext(TaskContext) // desestructurarlo
    
    // funcion para guardar tarea en el array
    const handleSubmit = (e) => {
        e.preventDefault() //cancela el comportamiento por defecto de un formulario
        createTask({ // recibe una tarea
            title,
            description
        });
        setTitle('') // limpiar los inputs
        setDescription('') // limpiar los inputs
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-3xl">
                <h1 className="text-3xl font-bold text-white mb-3 text-center">Create your task</h1>
                <input
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} // resetear los input en vacios
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-2 rounded-3xl"
                    required
                />
            
                <textarea
                    placeholder='Description'
                    onChange={e => setDescription(e.target.value)}
                    value={description} // resetear los input en vacios
                    className="bg-slate-300 p-3 w-full mb-2 rounded-3xl"
                ></textarea>
            
                <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400">Save</button>
            </form>
        </div>
    )
}

export default TaskForm