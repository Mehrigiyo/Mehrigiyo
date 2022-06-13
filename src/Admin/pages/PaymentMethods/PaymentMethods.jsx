import React from 'react'
import AdminTitle from '../../components/AdminTitle/AdminTitle'
import payments_bg from "../../../images/paymentbg.png"
import './PaymentMethods.scss';
function PaymentMethods() {
  return (
    <div className='payment_method'>
      <AdminTitle>Payment methods</AdminTitle>



      <div className="payment_bg">
        <img src={payments_bg} alt="" />
      </div>
    </div>
  )
}

export default PaymentMethods