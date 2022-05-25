import React from "react";
import green from "../../images/Group.png";

import "./Hero.css";
export default function Hero() {
  return (
    <>
      {/* <div className='hero-image'></div> */}
      <div class="hero-image">
        <div class="hero-text">
          <h1 style={{ fontSize: 50 }}>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
      <img src={green} className={"bgGreenOpacity hero-image__bgTree"} />
    </>
  );
}
