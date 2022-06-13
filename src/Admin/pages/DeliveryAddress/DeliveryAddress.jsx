import React from 'react'
import AdminTitle from '../../components/AdminTitle/AdminTitle'
import './DeliveryAddress.scss';
import delivery_bg from "../../../images/deliverybg.png"


function DeliveryAddress() {
  return (
    <div className='delivery_address'>
      <AdminTitle>Delivery Address</AdminTitle>

    {/* shu yerdan yozing */}


      <div className="delivery_bg">
        <img src={delivery_bg} alt="" />
      </div>
    </div>
  )
}

export default DeliveryAddress