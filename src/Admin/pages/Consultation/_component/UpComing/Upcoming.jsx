import React from "react";
// import doctorNev from "../../../icons/doctorNev.png";
import available from "../../../../../icons/pustoy.png";
import DoctorCard from "../DoctorCard/DoctorCard";
function Upcoming() {
    const data=[]
  return (
    <>
         {
       data.length == 0  ?  
       <div className="consultation__consFoto">
        <img src={available} alt="" />
      </div>
       :
       <DoctorCard />
        
     }
    </>
  );
}

export default Upcoming;
