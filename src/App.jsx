import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './component/Register'
import Search from './component/Search'
import View from './component/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
      <Search/>
      <View/>
    </>
  )
}

export default App
