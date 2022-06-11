import React from "react";
import DoctorCard from "../../../Admin/pages/Consultation/_component/DoctorCard/DoctorCard";
import AdminTab from "../../components/AdminTab/AdminTab";

function Consultation() {
  return (
    <div>
      <div>
        <AdminTab children={"UPCOMING"} name={"PAST CONSULTATION"}>
           </AdminTab>
      </div>
      <div>
        <DoctorCard />
      </div>
    </div>
  );
}

export default Consultation;
