import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { functionAlert } from 'nk_alert'
import Calculadora from './components/calculadora'
import Imc from './components/imc'

function App() {
  return (
    <div className="App">
      <Calculadora />
      <br />
      <button onClick={() => functionAlert()}>Funcion alerta</button>
      <Imc />
    </div>
  )
}

export default App
