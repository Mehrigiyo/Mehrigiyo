import React from 'react'
import './LoveMedice.scss';
import LoveDoctors from '../LoveDoctors/LoveDoctors';
import filedowload from "../../images/data.json].png";

function LoveMedice() {
  return (

    <div className='love_medice'>

      <LoveDoctors title={"Sevimli dorilar"} br_name={"Saqlangan dorilar"}>
        <div className="empty_card">
          <img src={filedowload} alt="" />
          <h3>Saqlangan dorilar bo’sh!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor</p>
          <div className="circle_num">
            0
          </div>
        </div>
      </LoveDoctors>
      

    </div>
  )
}

export default LoveMedice