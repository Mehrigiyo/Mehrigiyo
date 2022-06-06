import React from 'react'
import './LoveMedice.scss';
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import tree from "../../images/Group.png"
import LoveDoctors from '../LoveDoctors/LoveDoctors';



function LoveMedice() {
  return (

    <div className='love_medice'>

        <LoveDoctors title={"Sevimli dorilar"} br_name={"Saqlangan dorilar"}/>
      {/* <div className="love_medice_bg">
        <div className="love_medice_item globalContainer">
          <Breadcrum width={1400} name={"Saqlangan dorilar"}>Saqlangan dorilar</Breadcrum>
          <div className="love_medice_item_title">
            <h1>Sevimli dorilar</h1>
          </div>
        </div>
      </div>
      <div className="love_medice_bgtree">
          <img src={tree} alt="bg_tree" />
      </div> */}
    </div>
  )
}

export default LoveMedice