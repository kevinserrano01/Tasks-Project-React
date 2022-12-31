import {useState} from 'react'

function TaskForm({createTask}) {

    const [title, setTitle] = useState("") // guardar el titulo de una tarea
    const [description, setDescription] = useState("") // guardar la descripcion de una tarea

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
        <form onSubmit={handleSubmit}>
            <input
                pleaceholder='Add new task'
                onChange={(e) => setTitle(e.target.value)}
                value={title} // resetear los input en vacios
                autoFocus
            />

            <textarea
                placeholder='Escribe la descripcion de la tarea'
                onChange={e => setDescription(e.target.value)}
                value={description} // resetear los input en vacios
            ></textarea>

            <button>Save</button>
        </form>
    )
}

export default TaskForm