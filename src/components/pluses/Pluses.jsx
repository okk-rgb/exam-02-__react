import React from 'react'
import { GiCardboardBoxClosed, GiTrophyCup  } from "react-icons/gi";
import { CiCreditCard1, CiHeadphones } from "react-icons/ci";
import './Pluses.css'



const Pluses = () => {
  return (
    <section className='pluses__wrapper'>
    <div className='container'>
      <div className="pluses__first"><GiCardboardBoxClosed/>
      <div className="pluses__text">
    <h3>Fasted Delivery</h3>
    <p>Delivery in 24/H</p>
        </div>
        </div>
      <div className="pluses__second"><GiTrophyCup />
      <div className="pluses__text">
          <h3>24 Hours Return</h3>
          <p>100% money-back guarantee</p>
        </div></div>
      <div className="pluses__third"><CiCreditCard1 />
      <div className="pluses__text">
          <h3>Secure Payment</h3>
          <p>Your money is safe</p>
        </div></div>
      <div className="pluses__fourth"><CiHeadphones />
      <div className="pluses__text">
          <h3>Support 24/7</h3>
          <p>Live contact/message</p>
        </div></div>
    </div>
    </section>
  )
}

export default Pluses
