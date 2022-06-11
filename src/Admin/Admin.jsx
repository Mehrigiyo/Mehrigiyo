import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../User/components/Header/Header";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import Consultation from "./pages/Consultation/Consultation";
function Admin() {
  return (
    <div>
      <AdminLayout>
      <Routes>
          <Route path="/consultation" element={<Consultation/>} />
        </Routes>
      </AdminLayout>
    </div>
  );
}

export default Admin;
