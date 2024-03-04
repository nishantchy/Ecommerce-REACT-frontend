import React from 'react'
import MyRoutes from './routes/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      
      <MyRoutes/>
      <Footer/>
    </div>
  )
}

export default App
