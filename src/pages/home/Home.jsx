import React from 'react'
import Banner from '../../components/banner/Banner'
import Pluses from '../../components/pluses/Pluses'
import Brands from '../../components/brands/Brands'
import Deals from '../../components/deals/Deals'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Pluses/>
      <Brands/>
      <Deals/>
    </div>
  )
}

export default Home
