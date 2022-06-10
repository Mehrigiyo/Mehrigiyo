import React from "react";
import Header from "../../../User/components/Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Sidebar/>
    </>
  );
};

export default AdminLayout;
