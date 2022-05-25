// import { Col, Row } from "antd";
import React from "react";


import Hero from "../../components/Hero/Hero";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import MehrigiyoPlus from "./_components/MehrigiyoPlus/MehrigiyoPlus";
import Questions from "./_components/Questions/Questions";

const Home = () => {
 
  
  return (
    <>
      <Hero />
      

      <MehrigiyoPlus/>
      <Questions/>
      {/* <NewsComponent /> */}
    </>
  );
};

export default Home;
