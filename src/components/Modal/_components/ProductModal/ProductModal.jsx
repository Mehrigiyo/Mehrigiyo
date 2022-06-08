import React from 'react'
import GreenButton from '../../../Button/GreenButton';
import Button from '../../../Buttons/Button';
import modalicon3 from '../../../../icons/modalicon3.svg';
import modalicon1 from '../../../../icons/modalicon1.svg';
import modalicon2 from '../../../../icons/modalicon2.svg';
import modalicon4 from '../../../../icons/modalicon 4.svg';
import './product-modal.scss';
function ProductModal() {
  return (
    <div className='product_modal'>
      <div className="product_modal__title">
        <h1>Buyurtma</h1>
      </div>
      <div className="product_modal__form">
        <form>
          <div className="from_control">
            <label htmlFor="#" className='product_modal__form__label'>Yetkazib berish manzili</label>
            <input type="text" className='product_modal__form__input' placeholder='Manzilingizni kiriting...' />
            <img className='product_modal__form__input__img' src={modalicon3} alt="" />
          </div>
          <div className="form_btns">
            <label htmlFor="#" className='product_modal__form__label'>To'lov turi</label>
            <button type="button" className='product_modal__form__btn active' >
              Naqd pul
              <img className='product_modal__form__btn__img' src={modalicon4} alt="" />
            </button>

            <button type="button" className='product_modal__form__btn' >
                8600 53** **** 8093
              <img className='product_modal__form__btn__img' src={modalicon2} alt="" />
            </button>

            <button type="button" className='product_modal__form__btnx' >
                Karta qo’shish
              <img className='product_modal__form__btn__imgx' src={modalicon1} alt="" />
            </button>
          </div>


        </form>
        <div className="form_log">
          <div className="form_btns__logout">
              <GreenButton>Chiqish</GreenButton>
          </div>
          <div className="form_btns__login">
              <GreenButton>To’lov qilish</GreenButton>
          </div>
          
          
        </div>
      </div>

    </div>
  )
}

export default ProductModal