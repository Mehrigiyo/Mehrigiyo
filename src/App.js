import User from "./User/User";
import Admin from "./Admin/Admin";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useForm from "./Admin/hooks/useForm";
import { userGet } from "./store/reducers/user/userMe/action";
import { Route, Routes } from "react-router-dom";

function App() {
  const [ active, setActive] = useState(!!localStorage.getItem('token'))
  const { routerData } = useSelector((state) => state.changeRouter);
  const { logindate , access:loginAccess, loading:loginLoading} = useSelector(
    (state) => state.loginReducer
  );
  // console.log(logindate);
  const dispatch = useDispatch()
  useEffect(()=>{
   if(!!localStorage.getItem('token')){
     dispatch(userGet())
   }
   if(!!localStorage.getItem('token') && !active ){
     setActive(true)
   }
 }, [logindate])
  return (
    <>    
     <User />
    {/* {
      active ? <Admin/>  : <User />
    } */}
      {/* {
        routerData === "user" ? ( 
        <User / >
      ) : routerData === "user" ? ( 
        <Admin / >
      ) : null
      } */}
    </>
  );
}

export default App;