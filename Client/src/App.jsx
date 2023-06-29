import { useState } from 'react'
import './App.css'
import NavbarOne from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./Pages/Home"
import Search from "./Pages/Search"
import Random from "./Pages/Random"




function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break;
    case '/Search':
      component = <Search />
      break;
    case '/Random':
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
