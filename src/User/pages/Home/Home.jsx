// import { Col, Row } from "antd";
import React, { useEffect } from "react";
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
import Partners from "../../components/Partners/Partners";
import ProductMenu from "./_components/ProductMenu/ProductMenu";
import { useDispatch, useSelector } from "react-redux";
import apiRoot from "../../../store/apiRoot";
import { getTypes } from "../../../store/reducers/get/typesDoctor/action";
// import { Get } from "../../store/reducers/get/typesDoctor/api";

const Home = () => {
  
const dispatch = useDispatch()

  useEffect(()=> {
    apiRoot.get('specialist/types/')
    .then((res) => dispatch(getTypes(res?.data?.data)))
  },[])
  return (
    <>
      <Hero />
      <ServiceBlog />
      <ConsultDoctor />
      <WelcomeOrganic />
      <OnlineHelp />
      <ProductMenu/>
      <Reklama />
      <DownloadMobile />
      <NewsComponent />
      <MehrigiyoPlus />
      <Questions />
      <Form />
      <Partners/>
    </>
  );
};

export default Home;
