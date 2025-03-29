import { useState,createContext } from 'react'
import './App.css'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Viewcart from './components/Viewcart.jsx'
import { cartContext } from './components/cartContext.jsx'

function App() {
  const [cart ,setCart]=useState([])
  return (
    <cartContext.Provider value={{cart,setCart}}>
          <BrowserRouter>
      <Header cart={cart}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/Cart' element={<Viewcart  />} />
        </Routes>
      </div>

    </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
