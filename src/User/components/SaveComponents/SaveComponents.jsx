import React from 'react'
import './SaveComponents.scss';
import filedowload from "../../../images/data.json].png";
import Breadcrum from '../Breadcrum/Breadcrum';
import {BreadcrumbItem} from 'react-bootstrap'
function SaveComponents({ title = "Saqlangan shifokorlar", name = "/ Saqlangan shifokorlar",children ,bool=true}) {
  return (
  <>

        <div className="love_doctor">
            <div className="love_doctors_item globalContainer">
                <Breadcrum width={1400}>
                <BreadcrumbItem href="lovedoctors">{title}</BreadcrumbItem>
                {name}
                </Breadcrum>
                <div className="love_doctors_item_title">
                <h1>{title}</h1>
                </div>
               { children 
                  ||
                <div className='love_medice'>

                            <div className="empty_card">
                                <img src={filedowload} alt="" />
                                <h3>{title} bo’sh!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor</p>
                                <div className="circle_num">
                                    0
                                </div>
                            </div>
                </div>}
            </div>
       
        </div>
  </>
   
  )
}

export default SaveComponents