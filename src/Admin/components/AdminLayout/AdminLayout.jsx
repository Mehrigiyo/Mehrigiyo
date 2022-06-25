import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../User/components/Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="d-flex globalContainer">
        <Sidebar />
        <main className="w-100"> <Outlet/> </main>
      </div>
    </>
  );
};

export default AdminLayout;
