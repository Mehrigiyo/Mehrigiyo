

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Form.scss'
import Button from '../Buttons/Button'
import img from '../../images/form-img.png'
function Form() {
  return (
    <>
      <section className='form '>

            <div className="globalContainer">

                <Row>
                    <Col className=''  xs={5 }>
                        <img src={img} alt="img" />
                    </Col>
                    <Col className='' xs={7}>
                        <div className="form__body">
                           
                           <span>Biz bilan bog'lanish</span>
                           <h3>So'rovingizni yuboring</h3>
                            <form className='form__form' action="#">
                                <label htmlFor="fullName">Foydalanuvchi nomi</label>
                                <input type="text" id='fullName'  placeholder='Mahmud'/>

                                <label htmlFor="email">Elektron pochta (ixtiyoriy)</label>
                                <input type="text" id='email' placeholder='email' />
                                <label htmlFor="tel">Telefon raqam</label>
                                <input type="text" id='tel' placeholder='+998 94 681 |' />

                                <input className='savol' type="text" placeholder='Sizning savolingiz' />

                                <Button>Xabar yuborish</Button>
                            </form>
                        </div>
                    </Col>
                </Row> 
            </div>

            <div className="form__bg">
                
            </div>
      </section>
    </>
  )
}

export default Form