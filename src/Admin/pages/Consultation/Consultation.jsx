import React from "react";
import DoctorCard from "../../../Admin/pages/Consultation/_component/DoctorCard/DoctorCard";
import AdminTab from "../../components/AdminTab/AdminTab";


import "./Consultation.scss";
import AdminTitle from "../../components/AdminTitle/AdminTitle";
import Upcoming from "./_component/UpComing/Upcoming";
import PASTCONSULTATION from "./_component/DoctorCard/PAST CONSULTATION/PAST CONSULTATION";

function Consultation() {


  return (
    <div className="consultation">
      <AdminTitle>Consultation</AdminTitle>
   
       <AdminTab title1={"UPCOMING"} title2={"PAST CONSULTATION"} children2={<PASTCONSULTATION/>} children={<Upcoming/>}/>

    </div>
  );
}

export default Consultation;
