import React from 'react'
import "./Bottom-Header.css";
import { Link } from 'react-router-dom';
import logo from "../../icons/Logo.svg"
import doctor from "../../icons/doktor-icon.svg"
import heart from "../../icons/heart.svg"
import Cart from "../../icons/Cart.svg"

const BottomHeader = () => {
  return (
    <div className='bottom-header  globalContainer'>
      <section className='bottom-headder-two'>
        <div>
          <img src={logo} alt=" logo" />
        </div>
      <nav className='navi'>
          <ul className="topUl">
            <li className="topi">
              <Link to="/"> Bosh sahifa</Link>
            </li>
            <li className="topi">
              <Link to="/"> Onlayn shifokorlar</Link>
            </li>
            <li className="topi">
              <Link to="/">Mahsulotlar</Link>
            </li>
            <li className="topi">
              <Link to="/">Biz haqimizda</Link>
            </li>
            <li className="topi">
              <Link to="/">Yangiliklar</Link>
            </li>
            <li className="topi">
              <Link to="/">Yordam</Link>
            </li>
          </ul>
        </nav>
        <div className='threeIcon'>
          <div className='iconca'>
            <img src={doctor} alt="" />
          </div>
          <div className='iconca'>
            <img src={heart} alt="" />
          </div>
          <div className='iconca'>
            <img src={Cart} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BottomHeader