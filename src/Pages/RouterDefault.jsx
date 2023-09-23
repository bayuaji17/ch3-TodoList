import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodoHompage } from './TodoHompage'

export const RouterDefault = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<TodoHompage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
