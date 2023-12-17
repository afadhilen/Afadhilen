import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AnimationRoutes from './components/AnimationRoutes'

function App() {
  return (
    <Router>
      <div className="App font-mono">
        <Navbar />
        <AnimationRoutes />
      </div>
    </Router>
  )
}

export default App
