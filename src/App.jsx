import React from 'react'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Pluses from './components/pluses/Pluses'
import Brands from './components/brands/Brands'
import Deals from './components/deals/Deals'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
