import React from 'react'
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import './LoveDoctors.scss';
import tree from "../../images/Group.png"
import Notification from "../../components/Notifacation/Notifacation";

function LoveDoctors({title="Saqlangan shifokorlar", br_name='Saqlangan shifokorlar', children}) {
  return (
    <div className='love_doctor'>
      <div className="love_doctors_item globalContainer">
          <Breadcrum width={1400} name={br_name}>{br_name}</Breadcrum>
          <div className="love_doctors_item_title">
            <h1>{title}</h1>
          </div>
          {children}
        </div>
      <div className="love_doctor_bg">
        
      </div>
      <div className="love_doctor_bgtree">
          <img src={tree} alt="bg_tree" />
      </div>
      <Notification/>
    </div>
  )
}

export default LoveDoctors