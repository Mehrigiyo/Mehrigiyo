import React from "react";
import "./DoctorCard.scss";

function DoctorCard({ photo, name, job }) {
  return (
    <div className="doctorCall">
      <div className="doctorCall__doctorphoto">
        <img src={photo} alt="photo" />
      </div>
      <div className="doctorCall__doctorName">
        <div>
          <h4>{name}</h4>
          <span>{job}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
