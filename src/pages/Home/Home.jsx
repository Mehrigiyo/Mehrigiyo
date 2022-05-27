// import { Col, Row } from "antd";
import React from "react";
import Hero from "../../components/Hero/Hero";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import MehrigiyoPlus from "./_components/MehrigiyoPlus/MehrigiyoPlus";
import Questions from "./_components/Questions/Questions";
import ConsultDoctor from "./_components/Consult_doctor/Consult_doctor";
import WelcomeOrganic from "./_components/WelcomeOrganic/WelcomeOrganic";
import OnlineHelp from "./_components/OnlineHelp/OnlineHelp";
import ServiceBlog from "./_components/Service_blog/Service_blog";
import Reklama from "../../components/Reklama/Reklama";

import DownloadMobile from "../../components/DownloadMobile/DownloadMobile";
import Form from "../../components/Form/Form";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceBlog />
      <ConsultDoctor />
      <WelcomeOrganic />
      <OnlineHelp />
      <Reklama />
      <NewsComponent />
      <MehrigiyoPlus />
      <Questions />
      <Form />
      <DownloadMobile />
    </>
  );
};

export default Home;
