import React from 'react'
import LoveDoctors from '../LoveDoctors/LoveDoctors'
import Button from '../../components/Buttons/Button';
import filedowload from "../../images/data.json].png";
import './ShopBox.scss';
function ShopBox() {
  return (
    <div className='shop_box'>
        <LoveDoctors title={"Savatcha"} br_name={"Savatcha"}>
        <div className="empty_card">
          <img src={filedowload} alt="" />
          <h3>Savatcha bo’sh!</h3>
          <Button  href={"/shopmenu"}>Buyurtmalar tarixi</Button>
          <div className="circle_num">
            0
          </div>
        </div>
      </LoveDoctors>
    </div>
  )
}

export default ShopBox