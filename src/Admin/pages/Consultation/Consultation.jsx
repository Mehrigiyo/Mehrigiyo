import React from "react";
import DoctorCard from "../../../Admin/pages/Consultation/_component/DoctorCard/DoctorCard";
import AdminTab from "../../components/AdminTab/AdminTab";
import doctorNev from "../../../icons/doctorNev.png"
import available from "../../../icons/pustoy.png";
import "./Consultation.scss";
import AdminTitle from "../../components/AdminTitle/AdminTitle";

function Consultation() {
  return (
    <div className="consultation">
      <AdminTitle>Consultation</AdminTitle>
      <AdminTab children={"UPCOMING"} name={"PAST CONSULTATION"}></AdminTab>
      <div className="consultation__consFoto">
         <img src={available} alt="" />
      </div>
      <div>
        <DoctorCard photo={doctorNev} name={"Sanjar Tohirov"} job={"Nevropatolog"}/>
      </div>
    </div>
  );
}

export default Consultation;
