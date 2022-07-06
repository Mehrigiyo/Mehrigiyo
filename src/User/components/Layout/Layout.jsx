import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { userGet } from "../../../store/reducers/user/userMe/action";
 import Notification from '../../components/Notifacation/Notifacation'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Layout = ({ children }) => {
  const {access} = useSelector(state => state.usermeReducer)
  const token = localStorage.getItem('token')
  const dispacht = useDispatch()

  useEffect(()=>{
    dispacht(userGet())
  }, [])
  return (
    <>
      <Header />
      <Notification />
         <main> 
            <Outlet/>
          </main>
      <Footer />
    </>
  );
};

export default Layout;
