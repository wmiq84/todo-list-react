import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'

// eslint-disable-next-line
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
    {/* becomes props.tasks in App */}
  </StrictMode>,
)

console.log(Greeting);