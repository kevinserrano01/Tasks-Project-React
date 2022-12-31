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

  return (
    // Fragmen = div
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}




export default App