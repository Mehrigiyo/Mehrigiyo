

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Form.scss'
import Button from '../Buttons/Button'
import img from '../../../images/form-img.png'
import IconVideo from "../../../icons/goIcon.svg"
import flag_uz from '../../../images/uz_flag.png'
import flag_ru from '../../../images/ru_flag.png'
import flag_en from '../../../images/eng_flag.png'
import { DownSvg } from '../IconSvg/IconSvg'
import { useState } from 'react'
function Form() {

  const [isActive, setIsActive] = useState(false)
  // const [index, setIndex] = useState(0)
  const flag = [flag_uz, flag_ru, flag_en]
  const openDrob = ()=>{
    setIsActive(prev=> !prev)

  }
  const indexOne = (index)=>{
    const one = flag[0]
    flag[0] = flag[index]
    flag[index] = one

  }

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
                                <label htmlFor="fullName">Foydalanuvchi nomi
                                    <input type="text" id='fullName'  placeholder='Mahmud'/>
                                </label>

                                <label htmlFor="email">Elektron pochta (ixtiyoriy)
                                    <input type="text" id='email' placeholder='email' />
                                </label>
                                <label className='telefon' htmlFor="tel">Telefon raqam
                                     <ul className={"drob_down " + (isActive ? 'active' : null) } onClick={openDrob}>
                                       {
                                        flag.map((item ,index)=>(
                                          <li onClick={()=> indexOne(index)}><img src={item} alt="img" /> { index===0? <DownSvg /> : null}</li>

                                        ))
                                       }
                                       
                                     </ul>
                                    <input type="text" id='tel' placeholder='+998 94 681 99 94' />
                                </label>
  
                                <input className='savol' type="text" placeholder='Sizning savolingiz' />

                                <Button src={IconVideo} style={{width: 213}}>Xabar yuborish</Button>
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