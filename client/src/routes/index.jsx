import React from 'react'
import { Route ,Routes as Router } from 'react-router-dom'
import Home from '../pages/home'
import Auth from '../pages/Authorization'

const Routes = () => {
  return (
    <Router>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Auth/>} />
    </Router>
  )
}

export default Routes