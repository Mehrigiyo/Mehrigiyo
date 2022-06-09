import React from "react";
import "./AboutHistory.scss";
import brat from "../../../../../icons/brat.png";
function AboutHistory() {
 
  return (
    <>
      <div className="history globalContainer">
          
        <div className="history__top globalContainer">
          <ul>
            <li>
              <a href="#origin">Kelib chiqishi</a>
            </li>
            <li>
              <a href="#Hozirda">Tarixi</a>
            </li>
            <li>
              <a href="#Hozirda">Hozirda</a>
            </li>
            <li>
              <a href="#serti">Yutuqlar va sertifikatlar</a>
            </li>
          </ul>
        </div>
        <div className="history__buttom">
        <div className="history__buttom__left">
          <img src={brat} alt="" />
        </div>
        <div className="history__buttom__right">
          <div className="history__buttom__right__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>Hurmat bilan,  Abdurazakov Alijon G‘aniyevich</h3>
            <h5>“Mehrigiyo” shirkati asoschisi, farmatsevt, xalq tabibi, Turon Fanlar akademiyasi akademigi.</h5>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default AboutHistory;
