// rfce
import React, {useState, useEffect} from "react";
import TaskList from './components/TaskList';
import  TaskForm  from "./components/TaskForm";
import { tasks as data } from './data/tasks';

function App() {

  const [tasks, setTask] = useState([])

  useEffect(() => { //Cuando cargue el componente voy a establecer tareas del otro archivo 'tasks.js'
      setTask(data)
  }, [])

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

  return (
    // Fragmen = div
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}




export default App