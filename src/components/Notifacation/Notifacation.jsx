import React from "react";
import phone from "../../images/phone.svg";
import whatsap from "../../images/whatsap.svg";
import './Notifacation.scss';


function Notifacation() {
  return (
    <div>
      <div className="notifacation">
        <div className="callInfo">
          <a href="#">
            {" "}
            <img src={phone} alt="" />
          </a>
        </div>
        <div className="MassageInfo">
          <a href="#">
            <img src={whatsap} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Notifacation;
