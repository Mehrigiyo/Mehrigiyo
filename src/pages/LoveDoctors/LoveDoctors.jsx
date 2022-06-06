import React from 'react'
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import './LoveDoctors.scss';
import tree from "../../images/Group.png"
function LoveDoctors({title="Saqlangan shifokorlar", br_name='Saqlangan shifokorlar'}) {
  return (
    <div className='love_doctor'>
      <div className="love_doctor_bg">
        <div className="love_doctors_item globalContainer">
          <Breadcrum width={1400} name={br_name}>{br_name}</Breadcrum>
          <div className="love_doctors_item_title">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      <div className="love_doctor_bgtree">
          <img src={tree} alt="bg_tree" />
      </div>

    </div>
  )
}

export default LoveDoctors