import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROOT } from './constants'
import Home from '../pages/Home'

export function RoutesComponent() {
  return (
    <Routes>
        <Route exact path={ROOT} element={<Home/>}></Route>
    </Routes>
  )
}