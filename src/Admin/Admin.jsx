import React from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "../User/components/Header/Header";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import Consultation from './pages/Consultation/Consultation';
import Managementpanel from './pages/Managementpanel/Managementpanel';
import Orders from './pages/Orders/Orders';
import DeliveryAddress from './pages/DeliveryAddress/DeliveryAddress';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';
import Notifications from './pages/Notifications/Notifications';
import Settings from './pages/Settings/Settings';
function Admin() {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Managementpanel/>} />{" "}
          <Route path="/consultation" element={<Consultation />} />{" "}
          <Route path="/orders" element={<Orders />} />{" "}
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />{" "}
          <Route path="/paymentmethods" element={<PaymentMethods />} />{" "}
          <Route path="/notifications" element={<Notifications />} />{" "}
          <Route path="/settings" element={<Settings />} />{" "}
        </Routes>
      </AdminLayout>
    </div>
  );
}

export default Admin;
