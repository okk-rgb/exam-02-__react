import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Deals.css'

const Deals = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=4")
      .then((res) => { setProducts(res.data.products);
      })
      .catch((err) => {console.error(err);
      });
  }, []);
  return (
    <section className='deals__wrapper'>
      <div className="container">
        <h2>Today’s Deals of the day</h2>
        
        <div className="deals__cards---wrapper">
          {
            products.map((item, index) => {
              return (
                <div className="deals__cards" key={index}>
                  <img src={item.thumbnail} alt="" />
                  <h3>{item.title}</h3>
                  <button className='cards__btn'>BUY Now - <span>$125</span></button>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Deals
