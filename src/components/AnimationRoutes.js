import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Landing from './Landing'
import Profile from './Profile'
import Education from './Education'
import Portofolio from './Portfolio'

function AnimationRoutes() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/porto" element={<Portofolio />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimationRoutes
