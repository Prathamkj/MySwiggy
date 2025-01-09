import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// importing the compontents
import Header from './components/Header'
import Category from './components/Category'
import TopResturants from './components/TopResturants'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Header/>
    <Category/>
    <TopResturants />   
    </>
  )
}

export default App
