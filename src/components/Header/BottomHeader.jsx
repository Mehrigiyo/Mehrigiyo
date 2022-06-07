import React, {useState} from "react";
import "./Bottom-Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../icons/Logo.svg";
import doctor from "../../icons/doktor-icon.svg";
import heart from "../../icons/heartbg.png";
import Cart from "../../icons/Cart.svg";
import Activedoctor from  "../../icons/avticeDoctor.svg"
import AcitiveLove from "../../icons/activeLove.svg";
import { Nav } from "react-bootstrap";


const BottomHeader = () => {
  const [activeDoctor, setActiveDoctor] = useState(true);
  const [activeMedice, setActiveMedice] = useState(true)

  const HandleActiveImage = ()=>{
    setActiveDoctor(next => !next)
  }
  const HandleActiveImage1 = ()=>{
    setActiveMedice(next => !next)
  }
  return (
    <div className="bottom-header  ">
      <div className="globalContainer flex-between">
        <section className="bottom-headder-two">
          <div>
            <NavLink to="/">
            <img src={logo} alt=" logo" />
            </NavLink>
          </div>
          <nav className="navi">
            <ul className="topUl">
              <li className="topi">
                <NavLink to="/"> Bosh sahifa</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/onlinedoctor"> Onlayn shifokorlar</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/doctorslist">Nevropatolog</NavLink>
                    <NavLink to="/">Genetika</NavLink>
                    <NavLink to="/">Stomatologiya</NavLink>
                    <NavLink to="/">Jarrohlik</NavLink>
                    <NavLink to="/tohealth">Hammasi +</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/product">Mahsulotlar</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/productlist">Choy</NavLink>
                    <NavLink to="/yoglar">Yog’lar</NavLink>
                    <NavLink to="/ziravor">Ziravorlar</NavLink>
                    <NavLink to="/asal">Asal</NavLink>
                    <NavLink to="/tabletka">Tabletkalar</NavLink>
                    <NavLink to="/allproduct">Hammasi +</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/aboute">Biz haqimizda</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/news">Yangiliklar</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/news">Yangiliklar</NavLink>
                    <NavLink to="/tohealth">Salomatlik sari</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/help">Yordam</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/help">Yordam</NavLink>
                    <NavLink to="/askquestion">Ko’p so’raladigan savollar</NavLink>
                  </li>
                </ul>
              </li>
            </ul>

          </nav>

          <div className="threeIcon">
            <div className="iconca">
              <NavLink to="/lovedoctors">
                {activeDoctor
                  ?
                    <img onClick={HandleActiveImage} src={doctor} alt="" />
                  :
                    <img onClick={HandleActiveImage}  src={Activedoctor} alt="" />
                }
              </NavLink>
            </div>
            <div className="iconca">
              <NavLink to="/lovemedice">
                { activeMedice ?
                  <img onClick={HandleActiveImage1} src={heart} alt="" />
                  :
                  <img onClick={HandleActiveImage1} src={AcitiveLove} alt="" />
                }
              </NavLink>
            </div>
            <div className="iconca">
              <NavLink to="/shop">
                <img src={Cart} alt="" />
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomHeader;
