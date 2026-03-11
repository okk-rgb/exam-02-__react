import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import himg1 from '../../assets/header_img1.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__top--part">
            <HiMiniBars3BottomLeft/>
            <h1>UNITED DEALS</h1>
            <img src={himg1} alt="" />
            <div className="header__input">
              <form action="">
                <CiSearch/>
                <input type="text" placeholder='Search essentials, groceries and more...'/>

              </form>
            </div>

            <div className="header__deals">
              <FaRegHandshake />
            <p>My Deals</p>
            </div>

            <div className="heager__sign">
              <FaUser />
              <p>Sign Up/Sign In</p>
            </div>

            <div className="header__cart">
              <CiShoppingCart />
              <p>Cart</p>
            </div>

          </div>
              <hr />
          <div className="header__bottom--part">
            <select name="" className="select__first">
              <option value="">Groceries</option>
            </select>

            <select name="" className="select__second">
              <option value="">Premium Fruits</option>
            </select>

            <select name="" className="">
              <option value="">Home & Kitchen</option>
            </select>

            <select name="" className="select__second">
              <option value="">Fashion</option>
            </select>

            <select name="" className="select__second">
              <option value="">Electronics</option>
            </select>

            <select name="" className="select__second">
              <option value="">Beauty</option>
            </select>

            <select name="" className="select__second">
              <option value="">Home Improvement</option>
            </select>

            <select name="" className="select__second">
              <option value="">Sports, Toys & Luggage</option>
            </select>

            <hr />
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header
