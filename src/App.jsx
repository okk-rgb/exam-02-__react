import React from 'react'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Pluses from './components/pluses/Pluses'
import Brands from './components/brands/Brands'
import Deals from './components/deals/Deals'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Products from './components/products/Products'
import ProductDetails from './pages/productDetails/ProductDetails'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pros' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
