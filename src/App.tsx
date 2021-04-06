import React from 'react'
import './App.css'

import { useControls } from 'leva'

function App() {
  const { name, aNumber } = useControls({ name: 'World', aNumber: 0 })

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <pre>name: {name}</pre>
        <pre>aNumber: {aNumber}</pre>
      </header>
    </div>
  )
}

export default App
