import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrum from "../../../../components/Breadcrum/Breadcrum";
import Notifacation from "../../../../components/Notifacation/Notifacation";
import "./FullCard.scss";
import childerin from "../../../../../icons/childer.png";
import sana from "../../../../../icons/sana.svg";

function FullCard() {
  return (
    <div className="fullCard globalContainer">
      <Breadcrum name={"Salomatlik sari"}>Mehrigiyo kompaniyasi ...</Breadcrum>
      <h3 className="fullCard__fullCardHead">
        Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini
        taqdim etadi.
      </h3>
      <Row className="fullCard__fullRow">
        <Col className="fullCard__fullRow__fullColOne" lg={9}>
          <div>
            <img src={childerin} alt="" />
          </div>
          <div className="fullCard__fullRow__fullColOne__ColOneText">
            <h4 className="fullCard__fullRow__fullColOne__ColOneText__colHfour">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
            <p className="fullCard__fullRow__fullColOne__ColOneText__colPiyText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              lacus non quisque gravida tortor. Enim id ornare nunc id quis
              vitae viverra dignissim. Enim nisi, pellentesque congue dictum
              faucibus. Ipsum risus platea arcu tristique. Sed arcu vitae ac
              interdum pretium turpis magna id ipsum. Turpis aenean habitant sit
              elementum vel diam nibh tellus at. Tortor risus eu lorem risus a
              nibh feugiat neque. Volutpat rhoncus ut at cursus in accumsan,
              consectetur. Tortor lorem vulputate convallis sagittis, non.
              Faucibus dignissim odio est eleifend volutpat neque. Integer
              elementum, rutrum lectus iaculis sapien, morbi turpis tincidunt
              at. Auctor at quisque ut et proin id purus id id. At turpis nibh
              maecenas integer augue sed vulputate elit sed. Quam senectus
              congue et in sem. In id viverra blandit facilisis enim, orci nibh.
              Sem egestas sed justo, sagittis, sapien aliquam tempor ac viverra.
              Quam ultricies nulla odio rhoncus elit malesuada condimentum
              tincidunt. Rutrum purus nibh mauris ultrices amet, commodo. Nulla
              at diam pulvinar at sed. Egestas in sed sit nisl, odio egestas
              metus in turpis. Tellus curabitur eget nulla leo pellentesque
              consectetur tortor. Id varius malesuada eget neque felis semper
              semper ac. Faucibus id libero lacus vitae gravida et diam nulla
              arcu. Leo amet nibh odio tortor, risus. Amet ac bibendum porttitor
              placerat rhoncus volutpat id sagittis dolor. Urna nunc elit eget
              accumsan. Scelerisque quis sed egestas risus nascetur dui id at.
              Eu amet, massa sit phasellus mauris lacus. Sed semper massa
              consequat sit faucibus eu enim tristique. Nulla fames egestas
              posuere cum urna, ullamcorper eu. Sit nulla diam eget mollis
              vitae. Pellentesque nibh euismod augue sociis. Sed lectus sed nibh
              amet. Duis interdum in vitae volutpat sit. Sit malesuada ut sed
              ultrices mattis lobortis dolor interdum ac. Libero justo, massa
              mauris interdum tincidunt tortor at. Sed orci volutpat amet
              dictumst semper. Vel eget sem mi nibh consectetur eros. Risus arcu
              nulla lacus, gravida aliquam. Habitasse at dui etiam turpis quam
              tortor.
            </p>
          </div>
        </Col>
        <Col className="fullCard__fullRow__fullColTwo" lg={3}>
          <div className="fullCard__fullRow__fullColTwo__fullColSpan">
            <span className="fullCard__fullRow__fullColTwo__fullColSpan__fullcolIcon"></span>
            <h4 className="fullCard__fullRow__fullColTwo__fullColSpan__fullCardICon">
              So’ngi yangiliklar
            </h4>
          </div>
          <div className="fullCard__fullRow__fullColTwo__fullMassage">
            <div className="fullCard__fullRow__fullColTwo__fullMassage__fullMassagTop">
              <span>
                {" "}
                <img src={sana} alt="" />
              </span>
              <p>12.09.2021 - 15:12</p>
            </div>
            <div className="fullCard__fullRow__fullColTwo__fullMassage__fullMassagButtom">
              <p>
                BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN "SUMBUL
                SHIFO" TO'PLAMI"
              </p>
            </div>
          </div>
          <div className="fullCard__fullRow__fullColTwo__fullMassage">
            <div className="fullCard__fullRow__fullColTwo__fullMassage__fullMassagTop">
              <span>
                <img src={sana} alt="" />
              </span>
              <p>12.09.2021 - 15:12</p>
            </div>
            <div className="fullCard__fullRow__fullColTwo__fullMassage__fullMassagButtom">
              <p>Dream Tea-choy, bir kishi orzu qilgan choy!</p>
            </div>
          </div>
        </Col>
      </Row>

      <Notifacation />
    </div>
  );
}

export default FullCard;
