import React from 'react'
import Home from './Home'
import AddTodo from '../Components/AddTodo'
import { Route, Routes } from 'react-router-dom'

const Mainroutes = () => {
  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/edit/:id" element={<AddTodo/>}></Route>
    <Route path="*" element={"404 not Found!!!"}></Route>

  </Routes>
}

export default Mainroutes