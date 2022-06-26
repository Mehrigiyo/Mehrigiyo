import React from "react";
import { useState } from "react";
import GreenButton from "../../../Buttons/Button/GreenButton";
import uzFlag from "../../../../../icons/uz_flag.svg";
import reg1 from "../../../../../images/registrationBg.png";
import reg2 from "../../../../../images/registrationBg2.png";
import { useSelector, useDispatch } from "react-redux";
import { regestrationPost } from "../../../../../store/reducers/user/regestration/action";
import { loginPost } from "../../../../../store/reducers/loginPost/action";
// import useFetch from "../../../../../Admin/hooks/useFetch";
import "./Login.scss";
// import Verification from "../Verification/Verification";
import useInput from "../../../../../Admin/hooks/useInput";
// import { setCurrentUser, setToken } from "../../../../../store/reducers/userme";
// import apiRoot from "../../../../../store/apiRoot";
import { userGet } from "../../../../../store/reducers/user/userMe/action";
import { post } from "../../../../../store/reducers/user/regestration/api";
const Login = ({set}) => {
  const [num, setNum] = useState(1);
  const [value, setValue] = useState({
    username:null,
    first_name:null,
    last_name:null,
    email:null,
    avatar: null, 
 }
 );
 const [loginValue, setLoginValue] = useState({
  username:null,
}
);
  const { loading, access, data, error } = useSelector(
    (state) => state.regestrationReducer
  );

  const { logindate , access:loginAccess, loading:loginLoading} = useSelector(
    (state) => state.loginReducer
  );
  if(logindate?.refresh){
    set(false)
  }
  const { userData }  = useSelector(
    (state)=> state.usermeReducer
  )
  
  const onChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setLoginValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  };

  const dispatch = useDispatch();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(regestrationPost(value));
     if (data?.refresh) {
      setNum(1);
    }
  };
  
  const onSubmit2 = async (e) => {
    e.preventDefault()

    await dispatch(loginPost(loginValue));
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
              <form className="form__forn" onSubmit={(e)=>onSubmit2(e)} >
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
                
                {
                  loginLoading? "loading..." :   <GreenButton >Tizimga kirish</GreenButton>
                }
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
              {/* <input name="avatar" onChange={(e)=> onChange(e)} type="file" /> */}
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
                name="email"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="email">Parolni o’ylab toping</label>
              <input
                type="text"
                name="password"
                placeholder="************"
                required
                onChange={(e) => onChange(e)}
                // {...Password}
              />
              {Password.error &&  <span style={{ color: 'red' }}>{Password.error}</span>}
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
               {loading? "loading...." : <GreenButton >Ro’yxatdan o’tish</GreenButton>}
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
