// import { Col, Row } from "antd";
import React from "react";


import Hero from "../../components/Hero/Hero";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import MehrigiyoPlus from "./_components/MehrigiyoPlus/MehrigiyoPlus";
import Questions from "./_components/Questions/Questions";
import ConsultDoctor from "./_component/Consult_doctor/Consult_doctor";
import WelcomeOrganic from "./_component/WelcomeOrganic/WelcomeOrganic";
import OnlineHelp from "./_component/OnlineHelp/OnlineHelp";
import ServiceBlog from "./_component/Service_blog/Service_blog";
import Reklama from "../../components/Reklama/Reklama";
const Home = () => {
 
  
  return (
    <>
      <Hero />
      <ServiceBlog/>
      <ConsultDoctor />
      <WelcomeOrganic />
      <OnlineHelp />
      

      <MehrigiyoPlus/>
      <Questions/>
      <Reklama />
      {/* <NewsComponent /> */}
    </>
  );
};

export default Home;
