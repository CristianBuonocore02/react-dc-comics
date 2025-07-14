import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/Footer'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
