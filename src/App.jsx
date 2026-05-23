import { useState } from 'react'
import Navbar from "./components/NavBar/Navbar.jsx";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

function App() {
  
  return (
    <>
      <Navbar />

      <ItemListContainer />

    </>
  )
}

export default App
