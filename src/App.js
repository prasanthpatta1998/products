import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import SpecificProduct from './components/SpecificProduct'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AllProducts/>}/>
      <Route path='product/:id' element={<SpecificProduct/>}/>
      <Route path='*' element={<AllProducts/>}/>
    </Routes>
  )
}

export default App