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
<<<<<<< HEAD
import DownloadMobile from "../../components/DownloadMobile/DownloadMobile";

=======
>>>>>>> 5c907deeac89831b9a4f613124b6db6d0dae3cb6
const Home = () => {
 
  
  return (
    <>
      <Hero />
      <ServiceBlog/>
      <ConsultDoctor />
      <WelcomeOrganic />
      <OnlineHelp />
<<<<<<< HEAD
      {/* maxsulot ruyxatlari degani blog bor */}
      <Reklama />
      <DownloadMobile/>
      {/* <Row className="globalContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="title" onChange={(e) => handleChange(e)} type="text" />
          <input name="body" onChange={(e) => handleChange(e)} type="text" />
          <button disabled={value.title === undefined}>sent</button>
        </form>
        {!loading ? (
          data.map((item, i) => (
            <Col key={item.id} span={24} style={{ padding: 10 }}>
              {i + 1} {item.title}
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => handleVisibleEdit(item)}>edit</button>
            </Col>
          ))
        ) : (
          <p>loading...</p>
        )}

        <Modal visible={updateModal} setVisible={handleVisibleModal}>
          <form onSubmit={(e) => handleUpdate(e)}>
            <input
              onChange={(e) => handleChange(e)}
              name="title"
              type="text"
              value={value.title}
            />
            <input
              onChange={(e) => handleChange(e)}
              name="body"
              type="text"
              value={value.body}
            />
            <button>submit</button> <br />
          </form>
        </Modal>
=======
      
>>>>>>> 5c907deeac89831b9a4f613124b6db6d0dae3cb6

      <MehrigiyoPlus/>
      <Questions/>
      <Reklama />
      {/* <NewsComponent /> */}
    </>
  );
};

export default Home;
