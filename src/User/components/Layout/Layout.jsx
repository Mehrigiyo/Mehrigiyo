import React from "react";
import { Outlet } from "react-router-dom";
 import Notification from '../../components/Notifacation/Notifacation'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Notification />
         <main> <Outlet/>
          </main>
      <Footer />
    </>
  );
};

export default Layout;
