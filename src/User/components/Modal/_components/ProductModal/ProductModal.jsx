import React, { useState } from 'react'
import GreenButton from '../../../Buttons/Button/GreenButton';
import modalicon3 from '../../../../../icons/modalicon3.svg';
import modalicon1 from '../../../../../icons/modalicon1.svg';
import modalicon2 from '../../../../../icons/modalicon2.svg';
import modalicon4 from '../../../../../icons/modalicon 4.svg';
import Ellipse from "../../../../../icons/Ellipse 750-1.svg";
import Ellipse1 from "../../../../../icons/Ellipse 750.svg";
import './product-modal.scss';
import SuccessModal from '../SuccessModal/SuccessModal';
import Modal from "../../Modal";
function ProductModal({click}) {

  const [success, setSuccess] = useState(true)
  // function handlesuccesModal(i) {
  //   setSuccess(true)
  //     i.preventDefault 
  // }
  return (
    <>
    {success?
      <div className='product_modal'>
      <div className="product_modal__title">
        <h1>Buyurtma</h1>
      </div>
      <div className="product_modal__form">
        <form>
          <div className="from_control">
            <label htmlFor="#" className='product_modal__form__label'>Yetkazib berish manzili</label>
            <input
              type="text"
              className='product_modal__form__input'
              placeholder='Manzilingizni kiriting...'
              required
            />
            <img className='product_modal__form__input__img' src={modalicon3} alt="" />
          </div>
          <div className="form_btns">
            <label htmlFor="#" className='product_modal__form__label'>To'lov turi</label>
            <button type="button" className='product_modal__form__btn active' >
            <img className='ellipse_icon active' src={Ellipse1} alt="" />
              Naqd pul
              <img className='product_modal__form__btn__img' src={modalicon4} alt="" />
            </button>

            <button type="button" className='product_modal__form__btn' >
              <img className='ellipse_icon' src={Ellipse} alt="" />
              8600 53** **** 8093
              <img className='product_modal__form__btn__img' src={modalicon2} alt="" />
            </button>

            <button type="button" className='product_modal__form__btnx' >
              Karta qo’shish
              <img className='product_modal__form__btn__imgx' src={modalicon1} alt="" />
            </button>
          </div>
          <div className="form_log">
            <div className="form_btns__logout" onClick={()=> click(false)}>
                  <GreenButton>Chiqish</GreenButton>
            </div>
            <div className="form_btns__login" onClick={()=> setSuccess(false)}>
                  <GreenButton>To’lov qilish</GreenButton>
            </div>
          </div>

        </form>
      </div>
    </div>
    :
    <SuccessModal/>
    
    }
    </>
    
  )
}

export default ProductModal