import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import SinglePlayer from './pages/SinglePlayer.jsx'
import './styles.css'

export default function App() {
  const [route, setRoute] = useState('home')

  return (
    <>
      {route === 'home' && <Home onSingle={() => setRoute('single')} onMulti={() => setRoute('home')} />}
      {route === 'single' && <SinglePlayer onExit={() => setRoute('home')} />}
    </>
  )
}
