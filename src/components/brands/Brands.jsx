import React from 'react'
import bimg1 from '../../assets/brands__img1.png'
import bimg2 from '../../assets/brands___img2.png'
import bimg3 from '../../assets/brands__img3.png'
import bimg4 from '../../assets/brands__img4.png'
import bimg5 from '../../assets/brands__img5.png'
import bimg6 from '../../assets/brands__img6.png'
import './Brands.css'

const Brands = () => {
  return (
    <section className='brands__wrapper'>
      <div className="container">
        <h2>SHOP BY BRANDS</h2>
        <div className="brands__card--wrapper">
          <div className="brands__card">
            <img src={bimg1} alt="" />
          </div>
          <div className="brands__card">
            <img src={bimg2} alt="" />
          </div>
          <div className="brands__card">
            <img src={bimg3} alt="" />
          </div>
          <div className="brands__card">
            <img src={bimg4} alt="" />
          </div>
          <div className="brands__card">
            <img src={bimg5} alt="" />
          </div>
          <div className="brands__card">
            <img src={bimg6} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
