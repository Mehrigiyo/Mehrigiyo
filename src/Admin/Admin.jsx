import React from 'react'
import Header from '../User/components/Header/Header'
import AdminLayout from './components/AdminLayout/AdminLayout'
import Managementpanel from './pages/Managementpanel/Managementpanel';
import Consultation from './pages/Consultation/Consultation';
import DeliveryAddress from './pages/DeliveryAddress/DeliveryAddress';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';
import Orders from './pages/Orders/Orders';
import Notifications from './pages/Notifications/Notifications';
function Admin() {
  return (
    <div>
        {/* <AdminLayout/> */}
        <Header/>

    </div>
  )
}

export default Admin