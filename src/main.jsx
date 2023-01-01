import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskContextProvider } from './context/TaskContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Recomendaciones que te da del codigo en React
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
