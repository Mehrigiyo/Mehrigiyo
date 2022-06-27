import React from 'react'
import './LoveMedice.scss';
import LoveDoctors from '../LoveDoctors/LoveDoctors';
import filedowload from "../../../images/data.json].png";
import SaveComponents from '../../components/SaveComponents/SaveComponents';

function LoveMedice() {
  return (

    <div className='love_medice'>

      <SaveComponents title={"Sevimli dorilar"} name={"/ Saqlangan dorilar"} bool={false}>
        
      </SaveComponents>
      

    </div>
  )
}

export default LoveMedice