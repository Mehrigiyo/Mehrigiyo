import React, { useState } from "react";
import DoctorCard from "../../pages/Consultation/_component/DoctorCard/DoctorCard";
import "./AdminTab.scss";
import doctorNev from "../../../icons/doctorNev.png"
import available from "../../../icons/pustoy.png";
function AdminTab({ children, title1, title2,children2 }) {
  const [num, setNum] = useState(1);

  const obj = [1]
  return (
    <div className="adminTab">
      <div className="loginWrapper__box">
        <ul
          className={num === 1 ? "active" : "technalogy__spam"}
          onClick={() => setNum(1)}
        >
          <li className="technalogy__spam__in">
            <p>{title1}</p>
          </li>
        </ul>
        <ul
          className={num === 2 ? "active2" : "technalogy__spam1"}
          onClick={() => setNum(2)}
        >
          <li className="technalogy__spam__in1">
            <p>{title2} </p>
          </li>
        </ul>
      </div>
      <div className="title">
        {num === 1 ? (
          <div className="box ">
            <div className=" box__text">
             {children}
            </div>
          </div>
        ) : num === 2 ? (
          <div className="box ">
            <div className=" box__text">
            {children2}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AdminTab;
