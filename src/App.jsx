import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import AboutMe from './Components/AboutMe' 

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
      
    </>
  )
}

export default App
