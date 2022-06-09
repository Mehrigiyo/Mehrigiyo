import React, { useEffect } from "react";
import AboutHeader from "./_companents/AboutHeader/AboutHeader";
import AboutThree from "./_companents/AboutThree/AboutThree";
import Partners from "../../components/Partners/Partners";
import Reklama from "../../components/Reklama/Reklama";
import AboutHistory from "./_companents/AboutHistory/AboutHistory";
import Now from "./_companents/Now/Now";
import Sertefikat from "./_companents/Sertefikat/Sertefikat";
import HistoryTab from "./_companents/HistoryTab/HistoryTab";
import { Productget } from "../../store/reducers/get/productType/api";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../store/reducers/get/productType/action";

const About = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <>
      {/* <div className='about globalContainer'> */}
      <AboutHeader />
      <AboutHistory />
      <AboutThree />
      <HistoryTab />
      <Now />
      <Sertefikat />
      <Reklama />
      <Partners />

      {/* </div> */}
    </>
  );
};

export default About;
