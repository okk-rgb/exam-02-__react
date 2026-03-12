import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

const Products = () => {
  const [pros, setPros] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
    .get('https://dummyjson.com/products?limit=102')
    .then(res => setPros(res.data.products))
    .catch((err) => console.error(err))
    setLoading(false)
  }, [])

  if (loading) return <h2>Loading</h2>
  return (
    <section className='products__wrapper'>
      <div className="container">
        <div className="products__cards--wrapper">
          {
            pros.map((item, index) => {
              return(
                <div className="cards__wrapper" key={index}>
                  <Link to={'/pros'}><img src={item.thumbnail } alt="" /></Link>
                  <h3>{item.category}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </section>
  )
}

export default Products
