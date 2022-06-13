import React from 'react'
import available from "../../../../../../icons/pustoy.png";
import DoctorCard from '../DoctorCard';
import doctorNev from "../../../../../../icons/doctorNev.png"

function PASTCONSULTATION() {
   const data=[1]

  return (
    
    <>
      {
       data.length == 0  ?  
       <div className="consultation__consFoto">
        <img src={available} alt="" />
      </div>
       :
       <DoctorCard photo={doctorNev} name={"Bahrom Abdullayev"} job={"Nevropatolog"}/>
        
     }
    
    </>
  )
}

export default PASTCONSULTATION