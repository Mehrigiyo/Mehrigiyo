import React from "react";
import { Form } from "react-bootstrap";
import "./Sertefikat.scss";
import SertefikatSlayd from "./_companents/SertefikatSlayd";
import { Col, Row } from "react-bootstrap";

function Sertefikat() {
  return (
    <div className="sertificat globalContainer" id="serti">
      <Row className="sertificat__serRow">
        <Col  className="sertificat__serRow__serCol" lg={5}>
          <h3 className="sertificat__serRow__serCol__ride">Yutuqlar va sertifikatlar</h3>
          <p className="sertificat__serRow__serCol__rider">
            2020 yil dekabr oyida kompaniya ikkita xalqaro organik
            sertifikatlarni oldi: Amerika USDA ORGANIC va Yevropa EU ORGANIC
            Gollandiyaning Control Union Certifications kompaniyasidan. Yaqin
            kelajakda Saudiya Arabistoni, Omon, AQSH, Yevropa mamlakatlariga
            mahsulot eksport qilish rejalashtirilgan.
          </p>
        </Col>
        <Col lg={7}>
          <SertefikatSlayd />
        </Col>
      </Row>
    </div>
  );
}

export default Sertefikat;
