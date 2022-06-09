import React from 'react'
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import './LoveDoctors.scss';
import tree from "../../../images/Group.png"
import Notification from "../../components/Notifacation/Notifacation";
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

function LoveDoctors({title="Saqlangan shifokorlar", name="/ Saqlangan shifokorlar", children}) {
  return (
    <div className='love_doctor'>
      <div className="love_doctors_item globalContainer">
          <Breadcrum width={1400}>
            <BreadcrumbItem href="lovedoctors">
                {title}
            </BreadcrumbItem>
            {name}
          </Breadcrum>
          <div className="love_doctors_item_title">
            <h1>{title}</h1>
          </div>
          {children}
        </div>
      <div className="love_doctor_bg">
        
      </div>
      <div className="love_doctor_bgtree">
          <img src={tree} alt="bg_tree" />
      </div>
      <Notification/>
    </div>
  )
}

export default LoveDoctors