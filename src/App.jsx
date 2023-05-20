import { useState } from 'react'
import './App.css'
import NavbarOne from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.css';




function App() {
  const [count, setCount] = useState(0)

  return (
    <NavbarOne />
  )
}

export default App
