import React from 'react'
import './success-modal.scss';
import successImg from '../../../../../icons/succes.png';
import GreenButton from "../../../Buttons/Button/GreenButton";
// import nosuccessImg from '../../../../icons/nosuccess.png';
function SuccessModal() {
  return (
    <div className='success_modal'>
        <div className="success_modal__img">
            <img src={successImg} alt="" />
        </div>
        <div className="succes_modal_title">
            <h1>Buyurtmangiz qabul qilindi</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="succes_log">
            <div className="succes_btns__logout" >
                  <GreenButton>Chiqish</GreenButton>
            </div>
            <div className="succes_btns__login" >
                  <GreenButton>Buyurtmalarga o’tish</GreenButton>
            </div>
          </div>
    </div>
  )
}

export default SuccessModal