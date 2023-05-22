import { useState } from 'react'
import './App.css'
import NavbarOne from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';




function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <App />
      break;
    case '/Search':
      component = <Search />
      break;
    case 'Random':
      component = <Random /> 
      break;
    }

  return (
    <>
      <NavbarOne />
      {component} 
    </>
  )
}

export default App
