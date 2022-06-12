import React, {useState} from "react";
import "./Bottom-Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../icons/Logo.svg";
import doctor from "../../../icons/doktor-icon.svg";
import heart from "../../../icons/heartbg.png";
import Cart from "../../../icons/Cart.svg";
import Activedoctor from  "../../../icons/avticeDoctor.svg"
import AcitiveLove from "../../../icons/activeLove.svg";
import { DownSvg } from "../IconSvg/IconSvg";
import ActiveShop from '../../../images/active_shop.svg'
import { useDispatch } from "react-redux";
import { actionChangeRouter } from "../../../store/ChangeRouter/action";


const BottomHeader = () => {
  const [activeDoctor, setActiveDoctor] = useState(true);
  const [activeMedice, setActiveMedice] = useState(true)
  const [activeShop, setActiveShop] = useState(true)

  const HandleActiveImage = ()=>{
    setActiveDoctor(next => !next)
  }
  const HandleActiveImage1 = ()=>{
    setActiveMedice(next => !next)
  }
  const HandleActiveImage2 = ()=>{
    setActiveShop(next => !next)
  }
  const dispatch = useDispatch();
  const changeRouter = ()=>{
    dispatch(actionChangeRouter("user"))
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
                <NavLink to="/" onClick={changeRouter}> Bosh sahifa</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/onlinedoctor"> Onlayn shifokorlar <DownSvg/></NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/doctorslist">Nevropatolog</NavLink>
                    <NavLink to="/genetika">Genetika</NavLink>
                    <NavLink to="/stom">Stomatologiya</NavLink>
                    <NavLink to="/jarroh">Jarrohlik</NavLink>
                    <NavLink to="/tohealth">Hammasi +</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/product">Mahsulotlar <DownSvg/></NavLink>
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
                <NavLink to="/news">Yangiliklar <DownSvg/></NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/news">Yangiliklar</NavLink>
                    <NavLink to="/tohealth">Salomatlik sari</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/help">Yordam <DownSvg/></NavLink>
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
              <NavLink to="/shopbox">
              { activeShop ?
                  <img onClick={HandleActiveImage2} src={Cart} alt="" />
                  :
                  <img onClick={HandleActiveImage2} src={ActiveShop} alt="" />
                }
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomHeader;
