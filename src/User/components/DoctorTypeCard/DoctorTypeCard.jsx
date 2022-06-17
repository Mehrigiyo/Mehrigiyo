import React from 'react'
import './DoctorTypeCard.scss';
import Remember from "../../../images/Close_Icon.svg"
import { NavLink } from 'react-router-dom';
const  DoctorTypeCard = ({children,image, icon, number}) =>{
  return (
    <div className='DoctorTypeCard'>
        <div className="DoctorTypeCard_image">
            <img src={image} />
        </div>
        <div className="DoctorTypeCard_item">
            <h6>{children}</h6>
        </div>
        <div className="DoctorTypeCard_text">
            <p>{number} </p>
        </div>
        <div className="DoctorTypeCard_icon">
            <a href="#" ><img src={icon} /></a>
        </div>
    </div>
  )
}

export default DoctorTypeCard