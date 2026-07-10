import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './component/Register'
import Search from './component/Search'
import View from './component/View'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Discharge from './component/Discharge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>

      
      <Route path="/" element={<Register />} />
      <Route  path="/search" element={<Search />} />
      <Route path="/delete" element={<Discharge />} />
      <Route path="/view" element={<View/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
