import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContextProvider from './Mcontext/Context'
import Tache from './Todo/Tache'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContextProvider>
          <Tache></Tache>
      </ContextProvider>
    </div>
  )
}

export default App
