import React from 'react'
import AdminTitle from '../../components/AdminTitle/AdminTitle'
import payments_bg from "../../../images/paymentbg.png"
import './PaymentMethods.scss';
import SmallCard from '../../components/SmallCard/SmallCard';
function PaymentMethods() {
  return (
    <div className='payment_method'>
      <AdminTitle>Payment methods</AdminTitle>

      <SmallCard/> 


      <div className="payment_bg">
        <img src={payments_bg} alt="" />
      </div>
    </div>
  )
}

export default PaymentMethods