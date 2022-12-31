import TaskCard from './TaskCard'
function TaskList({tasks, deleteTask}) {
    if (tasks.length === 0) {
        return <h1>No hay tareas aun</h1>
    }
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} deleteTask={deleteTask}/> // por cada componente que se cree le va a pasar una tarea
            ))}
        </div>
    );
}

export default TaskList