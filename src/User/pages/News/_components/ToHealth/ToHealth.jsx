import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrum from "../../../../components/Breadcrum/Breadcrum";
import "./ToHealth.scss";
import { data } from "../../_components/ToHealth/Const";
import Card from "../../../../components/Card/Card";
import Notifacation from "../../../../components/Notifacation/Notifacation";

function ToHealth() {
  const [count, setCount] = useState(0);

  let link = [
    "Hammasi",
    "Mahsulotlar haqida",
    "Shifokorlar tavsiya qiladilar",
    "Ozish",
    "Salomatlik",
    "Detoks",
  ];
  return (
    <div className="toHealth globalContainer">
      <Breadcrum name={"Salomatlik sari"}>Salomatlik sari</Breadcrum>
      <Container style={{ maxWidth: 960 }}>
        <div className="tohealth_title">
          <h1>Salomatlik sari</h1>
        </div>
        <ul className="news__tabs">
          {link.map((item, index) => (
            <li key={index} onClick={() => setCount(index)}>
              <a href="#" className={index === count ? "active" : ""}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <div className="news__cards">
        <ul>
       
          <div></div>
        </ul>
        <Container style={{ maxWidth: 1240 }}r>
          {
            link.map((item, index) => (
              <>
                <Row key={item} className="news__slider">
                  {data.map((data, index) => (
                    <Col className="" key={index} lg={3}>
                      <Card data={data} />
                    </Col>
                  ))}
                </Row>
              </>
            ))[count]
          }
         
        </Container>
      </div>
    </div>
     
  );
}

export default ToHealth;
