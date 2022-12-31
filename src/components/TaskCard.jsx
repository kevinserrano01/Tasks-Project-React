function TaskCard({task}) {

    function mostrarAlerta(){
        alert(task.id)
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
            <button onClick={mostrarAlerta}>
                delete task
            </button>
        </div>
    )
}

export default TaskCard