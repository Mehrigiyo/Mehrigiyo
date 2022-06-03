import React from "react";
import "./HistoryTab.scss";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";

function HistoryTab() {
  const [num, setNum] = useState(1);
  return (
    <div className="historyTab globalContainer">
      <Row className="historyTab__tabRow">
        <div className="historyTab__tabRow__tabDiv">
          <Col className="historyTab__tabRow__tabDiv__tabCol" lg={12}>
            <h3 className="historyTab__tabRow__tabDiv__tabCol__tabthree">
              Tarix
            </h3>
            <p className="historyTab__tabRow__tabDiv__tabCol__tabTex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </div>
      </Row>
      <Row className="historyTab__tabRowTwo">
      <Col  className="historyTab__tabRowTwo__tabColtwo" lg={4}>
              <ul className="historyTab__tabRowTwo__tabColtwo__spamTwo" onClick={() => setNum(1)}>
                <li className="historyTab__tabRowTwo__tabColtwo__spamTwo__spamLi">
                  2022
                </li>
              </ul>
              <ul className="historyTab__tabRowTwo__tabColtwo__spamTwo" onClick={() => setNum(2)}>
                <li className="historyTab__tabRowTwo__tabColtwo__spamTwo__spamLi">
                  2021
                </li>
              </ul>
              <ul className="historyTab__tabRowTwo__tabColtwo__spamTwo" onClick={() => setNum(3)}>
                <li className="historyTab__tabRowTwo__tabColtwo__spamTwo__spamLi">
                  2020
                </li>
              </ul>
              <ul className="historyTab__tabRowTwo__tabColtwo__spamTwo" onClick={() => setNum(4)}>
                <li className="historyTab__tabRowTwo__tabColtwo__spamTwo__spamLi">
                  2019
                </li>
              </ul>
              <ul className="historyTab__tabRowTwo__tabColtwo__spamTwo" onClick={() => setNum(5)}>
                <li className="historyTab__tabRowTwo__tabColtwo__spamTwo__spamLi">
                  2018
                </li>
              </ul>
            </Col>
            <Col  className="historyTab__tabRowTwo__tabColthree" lg={8}>
              
                {num === 1 ? (
                  <div className="historyTab__tabRowTwo__tabColthree__tabBox ">
                    <div className=" historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree">
                      <h2 className="historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree__hTextthree">2022 «Mehrigiyo» заняла 2-ое место в республиканском конкурсе «Ташаббус»</h2>
                    </div>
                  </div>
                ) : num === 2 ? (
                  <div className="historyTab__tabRowTwo__tabColthree__tabBox">
                    <div className=" historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree">
                      <h2 className="historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree__hTextthree">2021 «Mehrigiyo» заняла 2-ое место в республиканском конкурсе «Ташаббус»</h2>
                    </div>
                  </div>
                ) : num === 3 ? (
                  <div className="historyTab__tabRowTwo__tabColthree__tabBox ">
                    <div className="historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree">
                      <h2 className="historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree__hTextthree">2020 «Mehrigiyo» заняла 2-ое место в республиканском конкурсе «Ташаббус»</h2>
                    </div>
                  </div>
                ) : num === 4 ? (
                  <div className="historyTab__tabRowTwo__tabColthree__tabBox ">
                    <div className=" historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree">
                      <h2 className="historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree__hTextthree">2019 «Mehrigiyo» заняла 2-ое место в республиканском конкурсе «Ташаббус»</h2>
                    </div>
                  </div>
                ) : num === 5 ? (
                  <div className="historyTab__tabRowTwo__tabColthree__tabBox ">
                    <div className=" historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree">
                      <h2 className="historyTab__tabRowTwo__tabColthree__tabBox__tabtextThree__hTextthree">2018 «Mehrigiyo» заняла 2-ое место в республиканском конкурсе «Ташаббус»</h2>
                    </div>
                  </div>
                ) : null}
              
            </Col>
      </Row>
    </div>
  );
}

export default HistoryTab;
