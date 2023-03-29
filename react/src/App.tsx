import { useState } from 'react'
import { Home } from './sections/Home'
import './App.css'
import { Services } from './sections/Services'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <Home />
      <Services />
      <Contact />
    </>
  )
}

export default App
