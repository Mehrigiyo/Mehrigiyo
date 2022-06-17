import React from "react";
import { useState } from "react";
import GreenButton from "../../../Buttons/Button/GreenButton";
import uzFlag from "../../../../../icons/uz_flag.svg";
import reg1 from "../../../../../images/registrationBg.png";
import reg2 from "../../../../../images/registrationBg2.png";
import { useSelector, useDispatch } from "react-redux";
import { regestrationPost } from "../../../../../store/reducers/regestration/action";
import { loginPost } from "../../../../../store/reducers/loginPost/action";
// import useFetch from "../../../../../Admin/hooks/useFetch";
import "./Login.scss";
// import Verification from "../Verification/Verification";
import useInput from "../../../../../Admin/hooks/useInput";
// import { setCurrentUser, setToken } from "../../../../../store/reducers/userme";
// import apiRoot from "../../../../../store/apiRoot";
import { userGet } from "../../../../../store/reducers/get/userme/action";
const Login = () => {
  const [num, setNum] = useState(1);
  const [value, setValue] = useState({});
  const { loading, access, data, error } = useSelector(
    (state) => state.regestrationReducer
  );
  const { logindate } = useSelector(
    (state) => state.loginReducer
  );


  const { userData }  = useSelector(
    (state)=> state.usermeReducer
  )
  console.log(logindate, "logindata")

  console.log(data);
  const onChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(value)
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(regestrationPost(value));
    if (data.status !== "fail") {
      setNum(1);
    }
  };

  const onSubmit2 = (e) => {
    e.preventDefault()
    dispatch(loginPost(value));
    if (logindate.status !== "fail") {
      dispatch(userGet())
      console.log(userData, "userdata")
    }

  }

  const Password = useInput('', true)




  return (
    <div className="loginWrapper">
      <div className="loginWrapper__box">
        <ul
          className={num === 1 ? "active" : "technalogy__spam"}
          onClick={() => setNum(1)}
        >
          <li className="technalogy__spam__in">
            <p>Kirish</p>
          </li>
        </ul>
        <ul
          className={num === 2 ? "active2" : "technalogy__spam1"}
          onClick={() => setNum(2)}
        >
          <li className="technalogy__spam__in1">
            <p>Ro’yxatdan o’tish </p>
          </li>
        </ul>
      </div>
      <div className="title">
        {num === 1 ? (
          <div className="box flex">
            <div className=" box__text">
              <form className="form__forn" onClick={(e)=>onSubmit2(e)} >
                <label htmlFor="fullNUmber">Telefon raqam</label>
                <input
                  className="number"
                  type="text"
                  name="username"
                  placeholder="998977075828"
                  onChange={(e) => onChange(e)}
                  required
                />
                <img className="flag" src={uzFlag} alt="flag" />

                <label htmlFor="email">Parol</label>
                <input type="text" id="email" placeholder="**********"
                  name="password"
                  onChange={(e) => onChange(e)}
                  required
                />
                <div className="loginWrapper__box__boxButton">
                  <GreenButton >Tizimga kirish</GreenButton>
                </div>
              </form>
            </div>
          </div>
        ) : num === 2 ? (
          <div className="box reg">
            <div className="box__text">
              <div className="box_img">
                <img className="img1" src={reg1} alt="" />
                <img className="img2" src={reg2} alt="" />
              </div>
              <p>Fotosurat yuklang (optinal)</p>
            </div>
            <form className="form__forn" onSubmit={(e) => onSubmit(e)}>
              <label htmlFor="number">raqami (optinal)</label>
              <input
                className="numbar"
                type="number"
                // placeholder="familiya"
                name="username"
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="text">familiya (optinal)</label>
              <input
                className="numbar"
                type="text"
                // placeholder="familiya"
                name="first_name"
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="text">ism (optinal)</label>
              <input
                className="numbar"
                type="text"
                // placeholder="ism"
                name="last_name"
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="email">Elektron pochta (optinal)</label>
              <input
                type="text"
                placeholder="AripovpasswordXojiakbar@gmail.com"
              />
              <label htmlFor="email">Parolni o’ylab toping</label>
              <input
                type="text"
                name="password"
                placeholder="************"
                {...Password}
              />
              {Password.error && <span style={{ color: 'red' }}>{Password.error}</span>}
              <div className="boxButtonText">
                <p>
                  “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz
                  <span>
                    {" "}
                    Foydalanish shartlarini qabul qilgan xisoblanasiz
                  </span>
                </p>
              </div>
              <div className="loginWrapper__box__boxButton2">
                <GreenButton>Ro’yxatdan o’tish</GreenButton>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
